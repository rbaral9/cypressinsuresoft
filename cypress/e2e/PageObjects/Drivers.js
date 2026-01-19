class Drivers
{
    clickDriversLink()
    {
        cy.get('a').contains("Drivers").click();
        
        cy.wait(2000);

    }

    enterDriverDetails()
    {
        cy.wait(1000);

        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_Sex_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_Sex_D_I']").type('F{enter}');

        cy.wait(2000);

        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_MaritalStatus_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_MaritalStatus_D_I']").type('S{enter}');
        cy.wait(2000);
        //DL Number
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseNumber_LicenseNumber_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseNumber_LicenseNumber_I']").type('B9085522{enter}');
        cy.wait(2000);

        //Country
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseCountry_D_I']").type('US{enter}');
        cy.wait(2000);

        //State
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_LicenseState_D_I']").type('CA{enter}');
        cy.wait(2000);

        //Birthdate
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").click();
        //cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").clear();
        cy.wait(2000);
        //cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").click();
        //cy.wait(20000);
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_InsName_BirthDate_BirthDate_I']").clear().type('06051987',{force: true});
        cy.wait(2000);


        //Relation to Policy Holder
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_RelationToPolicyHolderInsCombo_D_I']").type('Policyholder{enter}');
        cy.wait(2000);

        //Rated Excluded
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_RatedExcludedInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_RatedExcludedInsCombo_D_I']").type('Rated{enter}');
        cy.wait(2000);

        //LicenseType
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_LicenseTypeInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_LicenseTypeInsCombo_D_I']").type('Driver{enter}');
        cy.wait(2000);

        //LicenseStatus
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_LicensedStatusInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_LicensedStatusInsCombo_D_I']").type('Active{enter}');
        cy.wait(2000);

        //Occupation
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_DriverOccupationInsCombo_D_I']").type('Insurance{enter}');
        cy.wait(2000);

        //Driver UW Questions
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_c0w0modifier_t0_modifier_id_63_9_2_63_I']").click();
        cy.get("[id='P_L_V_v101w22_t16_c0w0_PC_t1i0_c0w0_t0_c0w0modifier_t0_modifier_id_63_9_2_63_I']").type('Yes{enter}');
        cy.wait(2000);

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