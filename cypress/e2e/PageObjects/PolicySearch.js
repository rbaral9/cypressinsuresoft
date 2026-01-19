class PolicySearch {
    constructor() {
        this.sel = {
            policyNumberInput:
                '#QuickPolicyLookupControl_NumberInsCombo_I, input[name="ctl00$QuickPolicyLookupControl$NumberInsCombo"]',

            searchButton:
                '#QuickPolicyLookupControl_FireLookupImageButton',

            resultsTable:
                '[data-cy=results-table], table[data-cy=results], table',

            resultRows:
                '[data-cy=results-table] tbody tr, table tbody tr',

            TransactionLink:
                '#P_L_V_TransactionLinksDiv',
            
            EndorsementLink:
                '#P_L_V_tl8',   

            loading:
                '[data-cy=loading], .loading, .spinner'
                
        }
    }

    enterPolicyNumber(policyNumber) {
        return cy
            .get(this.sel.policyNumberInput)
            .clear()
            .type(policyNumber)
            //.type('{enter}'); // optional: submit on enter key
    }

    clickSearch() {
        return cy.get(this.sel.searchButton).click();
    }

    clickTransactionLink() {
        return cy.get(this.sel.TransactionLink).click();
        cy.wait(1000);
    }
    
    clickEndorsementLink() {
        return cy.get(this.sel.EndorsementLink).click();
        cy.wait(1000);
    }

    search(policyNumber) {
        this.enterPolicyNumber(policyNumber);
        this.clickSearch();
        
    }

    waitForResults() {
        cy.get(this.sel.loading).should('not.exist');
        return cy.get(this.sel.resultRows);
    }

    getResultRows() {
        return cy.get(this.sel.resultRows);
    }

    getResultByIndex(index) {
        return this.getResultRows().eq(index);
    }

    selectResultByIndex(index) {
        return this.getResultByIndex(index).click();
    }

   
    assertNoResults() {
        return cy.get(this.sel.noResults).should('be.visible');
    }
}

export default new PolicySearch();
