




class Drivers
{

    /** 
    pageName = "Drivers";
    firstName = "input[id='P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_First']";

    lastName = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Last']";
    gender = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Sex_D_I']";
    
    martialStatus = " input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_MaritalStatus_D_I']";
    driverLicenseNo = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseNumber_LicenseNumber_I']";
    DLCountry = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I']";
    state = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I']";
    birthDate = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']";
    relationToPolicyHolder = "input[id=P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I']";
    isRated = "']";
    licenseType = "']";
    licenseStatus = "']";
    occupation = "']";
    driverUnderwritingQuestion = "']";
    saveDriver = "']";
*/


    clickDriversLink()
    {
     
        cy.get('a').contains("Drivers").click();
        
        cy.wait(2000);

       // cy.get('a').contains("Cancel").click();
       // cy.wait(2000);

        //cy.get('a').contains("Add a Driver").click();
    }

    enterDriverDetails()
    {
       // cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_First']").type('Test');
       // cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Last']").type('User1');

        cy.wait(1000);

        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Sex_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Sex_D_I']").type('F{enter}');

        cy.wait(2000);

        //selectDropdownValue("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Last']","F");

        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_MaritalStatus_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_MaritalStatus_D_I']").type('S{enter}');
        cy.wait(2000);
        //DL Number
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseNumber_LicenseNumber_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseNumber_LicenseNumber_I']").type('B9085522{enter}');
        cy.wait(2000);

        //Country
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I']").type('US{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I
        //P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I

        //State
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I']").type('CA{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I

        //Birthdate
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").type('10/01/1980{enter}');
        cy.wait(2000);

        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I

        //Relation to Policy Holder
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I']").type('Policyholder{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I

        //Rated Excluded
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_RatedExcludedInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_RatedExcludedInsCombo_D_I']").type('Rated{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_RatedExcludedInsCombo_D_I

        //Reason Excluded
        //cy.get("[id='P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_DriverExcludeReasonInsCombo_D_I']").click();
        //y.get("[id='P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_DriverExcludeReasonInsCombo_D_I']").type('Driver{enter}');
       
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_DriverExcludeReasonInsCombo_D_I

        //LicenseType
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_LicenseTypeInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_LicenseTypeInsCombo_D_I']").type('Driver{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_LicenseTypeInsCombo_D_I

        //LicenseStatus
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_LicensedStatusInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_LicensedStatusInsCombo_D_I']").type('Active{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_LicensedStatusInsCombo_D_I

        //Occupation
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I']").type('Insurance{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I
        //P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I

        //Driver UW Questions
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_c0w0modifier_t0_modifier_id_63_9_2_63_I']").click();
        cy.get("[id='P_L_V_v101w22_t17_c0w0_PC_t1i0_c0w0_t0_c0w0modifier_t0_modifier_id_63_9_2_63_I']").type('Yes{enter}');
        cy.wait(2000);
        //P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_c0w0modifier_t0_modifier_id_63_9_2_63_I









    }


    saveDriver()
    {
        cy.get("td[id='SaveToolStripButtonMiddle']").click({force: true});

    }
    

    selectDropdownValue(strLocator="",strDropdownValue="")
    {
        cy.get(strLocator).click();
        cy.get(strLocator).type(strDropdownValue+'{enter}');
    }

}
export  default Drivers;