import Login from "./PageObjects/Login.js"
import PolicySearch from "./PageObjects/PolicySearch.js"
import TransactionInformation from "./PageObjects/TransactionInformation.js"
import PolicyholderInformation from "./PageObjects/PolicyholderInformation.js"
import PolicyholderAddress from "./PageObjects/PolicyholderAddress.js"


describe('Address Endorsement', () => {

  it('Login and search policy for endorsement (single flow)',() => {
    cy.visit('https://c89-test-2.diamondasaservice.com/DiamondWeb/(S(dnt4w2254b1a0nmlp3sc0obh))/Employee', { timeout: 30000 });
    
    cy.wait(1000);





    const pageLogin = new Login();  
    pageLogin.setUserName('rbaral');
    pageLogin.setPassword('R@1qaz2wsx');
    pageLogin.clickLoginButton();
    cy.wait(2000);



    cy.fixture('addressendorsement.json').then((data) => {
      const policyEndoStatus = data.policyEndoStatus;
    });
    const policyEndoStatus = 'Endorsement Pending';
    const policySearch = PolicySearch;  
    // use PageObject's convenience method which waits for results
    policySearch.search('AGM0000199465');
    cy.wait(1000);


    if(policyEndoStatus!='Endorsement Pending'){

    policySearch.clickTransactionLink() ;
    policySearch.clickEndorsementLink() ;
    // select the policy from results to continue endorsement flow

    //Enter Transaction Information


    const transactionInformation = TransactionInformation; 
    transactionInformation.enterEffectiveDate('01072026');
    transactionInformation.entertransactionType('Endorsement');
    transactionInformation.enterTransactionSource('Company');
    transactionInformation.enterTransactionReason('Change Address');
    transactionInformation.enterRemarks('Address change endorsement');
    transactionInformation.clickSubmit();
    cy.wait(1000);
    }
    //Click on Policyholder Information Change Link
    const policyholderInformation = PolicyholderInformation; 
    policyholderInformation.clickChangeLink();  

    //Enter Policyholder Address Details
    const policyholderAddress = PolicyholderAddress;
    policyholderAddress.enterPolicyholderAddressDetails('12828', 'war horse st', '', '', 'San Diego', 'CA', '92129', 'San Diego');
    
    cy.wait(10000);
    //Click Issue Button
    cy.get("[id='P_L_V_IssueToolStripButton']").click({force: true});
          cy.wait(3000);

          //Update client button click
          cy.get("[id='P_L_V_EmployeeViewASPxPopupControl_UpdateClient_UpdateClientButton_CD']").click();

          cy.wait(3000);
          //Click issue button to Issue Policy
          cy.get("[id='P_L_V_EmployeeViewASPxPopupControl_UpdateClient_IssueButton_CD']").click();
          cy.wait(10000);


          //P_L_V_ValidationPopUp_MyASPxPopupControl_ContinueInsValidationButton_CD
          //P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD

          cy.get("[id='P_L_V_ValidationPopUp_MyASPxPopupControl_ContinueInsValidationButton_CD']").click();

          cy.wait(3000);

          cy.get("[id='P_L_TaskTabStrip_button6']").click();
          cy.wait(6000);


  })

})
