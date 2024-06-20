

class NewPolicyPage
{
    clickPolicyLink()
    {
        cy.get("td[id='PoliciesMenu']").click();
    }

    ClickNewPolicyLink()
    {
        cy.get('a').contains("New Policy").click({force: true});
        
    }
    enterEffectiveDate(EffectiveDate)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_EffectiveDate_EffectiveDate_I']").focus();
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_EffectiveDate_EffectiveDate_I']").clear().type(EffectiveDate);
    }
    enterFirstName(FName)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_FirstNameTextBox_I']").type(FName);
    }
    enterLastName(LName)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_LastNameTextBox_I']").type(LName);
    }

    enterPhopneNo(PhoneNo)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_PhoneTextBox_I']").focus();

        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_PhoneTextBox_I']").click();

        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_PhoneTextBox_I']").type(PhoneNo);
    }
    enterZip(zipCode)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_ZipTextBox_I']").focus()

        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_ZipTextBox_I']").click();

        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_ZipTextBox_I']").type(zipCode);
    }
    tabOutonZipField()
    {
        
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_NameCallbackPanel_ZipTextBox_I']").type( '{enter}');

    }



    enterAgencyID(AgencyId)
    {
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_CSLCallbackPanel_AgencyCombo_D_I']").type( AgencyId);
        cy.wait(2000);
        cy.get("input[id='P_L_G_MainASPxCallbackPanel_i50w0_t0_CSLCallbackPanel_AgencyCombo_D_I']").type( '{enter}');
        cy.wait(2000);
    }
    clickContinueButton()
    {
        cy.get('span').contains("Continue").click();
        cy.wait(2000);

    }

    
}

export default NewPolicyPage;
