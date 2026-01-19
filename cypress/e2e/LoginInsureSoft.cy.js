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

      //cy.visit('https://c89-test-1.diamondasaservice.com/DiamondWeb/Employee', { timeout: 30000 });
      cy.visit('https://c89-test-2.diamondasaservice.com/DiamondWeb/(S(dnt4w2254b1a0nmlp3sc0obh))/Employee', { timeout: 30000 });

      



      //cy.visit('https://c89-test-1.diamondasaservice.com/DiamondWeb/Employee', { timeout: 30000 });
      cy.wait(1000);
      const pageLogin = new Login();

      pageLogin.setUserName('rbaral');
      pageLogin.setPassword('R@1qaz2wsx');
      pageLogin.clickLoginButton();

      cy.fixture('PolicyDataIVR.json').then((data) => {
      //cy.fixture('JenPolicyData.json').then((data) => {

        for (var i = 1 ;i <= 20; i++) {
          //const rowNum = 2; // Specify the row number you want to read (0-based index)
          //const rowData = readExcelFileByRow('cypress/fixtures/cypress/support/InsureSoftPolicyData.xlsx', rowNum);
          //console.log(rowData);
    

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
          newPolicypage.enterAgencyID("Anchor");
          newPolicypage.clickContinueButton();

          cy.wait(10000);

          const addressPage = new Address();
          addressPage.checkNewClientExistsAndClick();
          addressPage.clickAddressLink();
          addressPage.enterAddress(user.StreetNo, user.Address);
          addressPage.saveAddress();

          cy.get("[id='P_L_V_MyNavigatorToggleLabel']").then(($PNo) => {

            const PolicyNumber = $PNo.text();
            cy.writeFile('cypress/fixtures/PolicyNo.txt', PolicyNumber + '\n', { flag: 'a+' })

          })

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

          cy.wait(5000);
          //P_L_V_ValidationPopUp_MyASPxPopupControl_ContinueInsValidationButton_CD
          //P_L_V_ValidationPopUp_MyASPxPopupControl_OKInsValidationButton_CD 


          cy.get("[id='P_L_V_ValidationPopUp_MyASPxPopupControl_ContinueInsValidationButton_CD']").click();
        
          cy.wait(7000);

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

        }

      })

    })
    
  }) 