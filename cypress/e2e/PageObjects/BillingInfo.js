
class BillingInfo
{

ClickBillingInfoLink()
{

    cy.get('a').contains("Billing Info").click();
        
    cy.wait(5000);
}

EnterBillingInfoData()
{

  //  cy.get("[name='ctl00$P$L$V$v101w22$t23$MethodComboBox$D']").type('Direct Bill{enter}');
    cy.wait(2000);

    cy.get("[name='ctl00$P$L$V$v101w22$t23$PayPlanInsCombo$D']").type('Full Pay Invoice{enter}');
    cy.wait(2000);


    cy.get("[name='ctl00$P$L$V$v101w22$t23$BillToControl$BillToInsComboBox$D']").type('Insured{enter}');
    cy.wait(2000);


    

    
    
    
}

ClickPolicySummary()
{
    cy.get('a').contains("Policy Summary").click();
        
    cy.wait(5000);
}



}
export default BillingInfo;

