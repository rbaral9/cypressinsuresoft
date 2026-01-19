class TransactionInformation {
    constructor() {
    this.sel = {
        effectiveDateInput: 
           '#P_L_TransactionControl_TransactionEffectiveInsDate_TransactionEffectiveInsDate_I',
        transactionType: 
           '#P_L_TransactionControl_TransactionTypeInsCombo_D_I',
        transactionSource: 
           '#P_L_TransactionControl_TransactionSourceInsCombo_D_I',
        transactionReason: 
            '#P_L_TransactionControl_TransactionReasonInsCombo_D_I',
        remarks: 
           '#P_L_TransactionControl_RemarksInsTextBox',
        btnSubmit:
            '#SubmitToolStripButtonMiddle',
        }
    }
    
    enterEffectiveDate(effectiveDate){
        return cy
            .get(this.sel.effectiveDateInput)
            .focus()
            .click()
            .type('{selectall}')
            .type(effectiveDate)
            .type('{enter}'); // optional: submit on enter key
    }
    
    entertransactionType(transactionType){
        return cy
            .get(this.sel.transactionType)
            .focus()
            .click()
            .type('{selectall}')
            .type(transactionType)
            .type('{enter}'); // optional: submit on enter key
    }
    enterTransactionSource(varTransactionSource){
        return cy
            .get(this.sel.transactionSource)
            .focus()
            .click()
            .type('{selectall}')
            .type(varTransactionSource)
            .type('{enter}'); // optional: submit on enter key
    }
     enterTransactionReason(varTransactionReason){
        return cy
            .get(this.sel.transactionReason)
            .focus()
            .click()
            .type('{selectall}')
            .type(varTransactionReason)
            .type('{enter}'); // optional: submit on enter key
    }
        enterRemarks(varRemarks){
        return cy
            .get(this.sel.remarks)

            .click()
            .wait(500)
            .type(varRemarks)
            .type('{enter}'); // optional: submit on enter key
    }
    
    clickSubmit(){
        return cy.get(this.sel.btnSubmit).click();
    }   
}


export default new TransactionInformation()