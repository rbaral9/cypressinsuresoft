import Login from "./PageObjects/Login.js"
import NewPolicyPage from "./PageObjects/NewPolicyPage.js";
import Address from "./PageObjects/AddressPage.js";
import UWQuestions from "./PageObjects/PreQualifyingUWQuestions.js";
import Drivers from "./PageObjects/Drivers.js";
import Vehicles from "./PageObjects/Vehicles.js";
import PolicyUnderwritingQuestion from "./PageObjects/UWQuestions.js";
import BillingInfo from "./PageObjects/BillingInfo.js";



describe('Launch Insure Soft Portal',
  {
    viewportHeight: 1200,
    viewportWidth: 1080

  }

  , () => {

    it('PerformLogin', () => {

      cy.visit('https://c89-test-1.diamondasaservice.com/DiamondWeb/Employee', { timeout: 30000 });
      cy.wait(1000);
      const pageLogin = new Login();
      pageLogin.setUserName('rbaral');
      pageLogin.setPassword('R@1qaz2wsx');
      pageLogin.cliclLoginButton();

      cy.fixture('PolicyDataIVR.json').then((data) => {

        for (var i = 5; i <= 5; i++) {

          let user = data.find(TestCase => TestCase.id == i);
          console.log(user);

          const newPolicypage = new NewPolicyPage();
          newPolicypage.clickPolicyLink();
          timeout: 50000, // increase total time for the visit to resolve
            newPolicypage.ClickNewPolicyLink();

          cy.writeFile('cypress/fixtures/PolicyNo.txt', user.EffectiveDate + ' ' + user.InsuredFname + ' ' + user.DrvLname + ': ', { flag: 'a+' })

          newPolicypage.enterEffectiveDate(user.EffectiveDate);
          newPolicypage.enterFirstName(user.InsuredFname);
          newPolicypage.enterLastName(user.DrvLname);
          newPolicypage.enterPhopneNo(user.PhoneNo);
          newPolicypage.enterZip(user.Zip);
          newPolicypage.tabOutonZipField();
          newPolicypage.enterAgencyID("Derek");
          newPolicypage.clickContinueButton();

          cy.wait(5000);

          // cy.get("[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_WorkflowPop_default_c0w0_t0_NewClientButton_CD']").should('exist').then(($element)=>

          // {
          //   if($element)
          //   {
          //     cy.get("[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_WorkflowPop_default_c0w0_t0_NewClientButton_CD']").click();
          //   }
          //   else
          //   {
          //     cy.log('Element is not present');
          //   }
          // }

          // )



          cy.wait(5000);




          const addressPage = new Address();
          addressPage.checkNewClientExistsAndClick();
          addressPage.clickAddressLink();
          addressPage.enterAddress(user.StreetNo, user.Address);
          addressPage.saveAddress();



          cy.get("[id='P_L_V_MyNavigatorToggleLabel']").then(($PNo) => {

            const PolicyNumber = $PNo.text();
            cy.writeFile('cypress/fixtures/PolicyNo.txt', PolicyNumber + '\n', { flag: 'a+' })

          })



          // cy.get("[id='P_L_V_MyNavigatorToggleLabel']").invoke('text').then(PolicyNumber);
          //  cy.writeFile('cypress/fixtures/PolicyNo.txt', PolicyNumber, { flag: 'a+' })



          const UWQuestionsPage = new UWQuestions();

          UWQuestionsPage.clickUWQuestionsLink();
          UWQuestionsPage.enterUWQuestions();

          const DriverPage = new Drivers();

          DriverPage.clickDriversLink();
          // cy.reload();


          cy.wait(5000);

          DriverPage.enterDriverDetails();
          DriverPage.saveDriver();


          cy.wait(5000);

          const VehiclePage = new Vehicles();

          cy.wait(5000);
          VehiclePage.clickVehiclesLink();

          cy.wait(2000);
          VehiclePage.enterVehicleDetails(user.VinNo);

          VehiclePage.saveVehicle();

          cy.wait(3000);

          const PolicyUWQuestionsPage = new PolicyUnderwritingQuestion();
          cy.wait(3000);

          PolicyUWQuestionsPage.clickUWQuestionsLink();
          PolicyUWQuestionsPage.enterPolicyUnderwritingQuestins();

          cy.wait(3000);

          const BillingInfoPage = new BillingInfo();
          BillingInfoPage.ClickBillingInfoLink();
          BillingInfoPage.EnterBillingInfoData();
          BillingInfoPage.ClickPolicySummary();


          // /dx-vam

          // #P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD > span

          // cy.get("[class='dx-vam']").click();
          cy.wait(5000);
          //cy.get('span').contains("OK").click();

          cy.get("[id='P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD']").click();
          //cy.get("span[id='P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD']").click({force: true});

          cy.wait(3000);
          //#P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD > 
          //cy.get("[id='P_L_TaskTabStrip_button6']").click();
          cy.wait(1000);
          // cy.get("[id='P_L_V_MyInsMessageBox_MyASPxPopupControl_YesInsMessageBoxButton_CD']").click();

          //#P_L_V_MyInsMessageBox_MyASPxPopupControl_YesInsMessageBoxButton_CD > span

          //Issue Policy
          cy.wait(3000);
          cy.get("[id='P_L_V_IssueToolStripButton']").click();
          cy.wait(3000);

          //Update client button click
          cy.get("[id='P_L_V_EmployeeViewASPxPopupControl_UpdateClient_UpdateClientButton_CD']").click();

          cy.wait(3000);
          //Click issue button to Issue Policy
          cy.get("[id='P_L_V_EmployeeViewASPxPopupControl_UpdateClient_IssueButton_CD']").click();
          cy.wait(10000);

          cy.get("[id='P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD']").click();

          cy.wait(3000);

          //#P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD > 
          cy.get("[id='P_L_TaskTabStrip_button6']").click();
          cy.wait(1000);
          //cy.get("[id='P_L_V_MyInsMessageBox_MyASPxPopupControl_YesInsMessageBoxButton_CD']").click();











          //#P_L_TaskTabStrip_button6

          //const PolicyNo = cy.get("[class='P_L_V_PremiumPanelInsUserControl_PolicyNumberLabel']").invoke('text');
          cy.wait(5000);
          //cy.writeFile('cypress/fixtures/PolicyNo.txt', PolicyNumber, { flag: 'a+' })

          // cy.writeFile('cypress\e2e\PolicyNo.json', { PolicyNo: '12345'})
          // //cy.writeFile('cypress\e2e\PolicyNo.json','12345');
          // cy.readFile('cypress\e2e\PolicyNo.json').then((user) => {
          //   expect(user.PolicyNo).to.equal('12345') // true
          // })

          // cy.writeFile('path/to/data.json', { name: 'Eliza', email: 'eliza@example.com' })



          // cy.readFile('SiteAPIdata.json').then((data) => {
          //   data.siteID = siteID;
          //   cy.writeFile('SiteAPIdata.json', data);
          // })

          //console.log(PolicyNo);
        }
        // alert(PolicyNo);
      })

    })
    /* 
    it('NewPolicyPage',()=>{
      const newPolicypage = new NewPolicyPage();
      newPolicypage.clickPolicyLink();
      newPolicypage.ClickNewPolicyLink();
      newPolicypage.enterEffectiveDate('02/01/2024');
      newPolicypage.enterFirstName('TestUser1');
      newPolicypage.enterLastName('TestUser1');
      newPolicypage.enterPhopneNo('8585273683');
      newPolicypage.enterZip('92131');
      
      
    })*/

    /*    var Connection = require('tedious').Connection;
       var config = {
         server: 'your_server.database.windows.net',  //update me
         authentication: {
           type: 'default',
           options: {
             userName: 'your_username', //update me
             password: 'your_password'  //update me
           }
         },
         options: {
           // If you are on Microsoft Azure, you need encryption:
           encrypt: true,
           database: 'your_database'  //update me
         }
       };
       var connection = new Connection(config);
       connection.on('connect', function (err) {
         // If no error, then good to proceed.
         console.log("Connected");
       });
   
       connection.connect();
   */
  }) 