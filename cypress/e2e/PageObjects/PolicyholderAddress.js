

class PolicyholderAddress {
    constructor() {
    this.sel = {
        UnlockButton:
            '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_ClearASPxButton',
        HouseNumber: 
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_HouseNumber',
        StreetName: 
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_StreetName',
        ApartmentNumber:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_ApartmentNumber',
        PostofficeBox:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_PostOfficeBox',
           
        City:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_City',
        State:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_AddressState_D_I',
           
        ZipCode:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_ZipCode_mtxtMain',
        County:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_County',
        VerifyAddressButton:
           '#P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_VerifyASPxButton',
        SaveButton:
           '#SaveInsImageButtonMiddle',
        

        }
    }
    
    clickUnlockButton(){
        return cy.get(this.sel.UnlockButton).click();
    }
    enterHouseNumber(houseNumber){
        return cy
            .get(this.sel.HouseNumber)
            .type('{selectall}')
            .type(houseNumber);
    }
    enterStreetName(streetName){
        return cy
            .get(this.sel.StreetName)   
            .type('{selectall}')
            .type(streetName);
    }
    enterApartmentNumber(apartmentNumber){
        return cy
            .get(this.sel.ApartmentNumber)   
            .type('{selectall}')
            .type(apartmentNumber);
    }
    enterPostofficeBox(postofficeBox){
        
        return cy
        .wait(5000)
        .get(this.sel.PostofficeBox)   
        .type('{selectall}')
        .type(postofficeBox);
    }
    enterCity(city){
        return cy
            .get(this.sel.City)   
            .clear()
            .type(city)
            .type('{enter}');
    }
    enterState(state){
        return cy
            .get(this.sel.State)   
            .focus()
            .click()
            .type('{selectall}')
            .type(state)
            .type('{enter}'); // optional: submit on enter key
    }
    enterZipCode(zipCode){
        return cy
            .get(this.sel.ZipCode)   
            .clear()
            .type(zipCode);
    }
    enterCounty(county){
        return cy
            .get(this.sel.County)   
            .clear()
            .type(county);
    }
    clickVerifyAddressButton(){
        return cy.get(this.sel.VerifyAddressButton).click();
    }
    clickSaveButton(){
        return cy.get(this.sel.SaveButton).click();
    }

    //Enter all address details
    enterPolicyholderAddressDetails(houseNumber, streetName, apartmentNumber, postofficeBox, city, state, zipCode, county){
        this.clickUnlockButton();
        cy.wait(5000);
        this.enterHouseNumber(houseNumber); 
        this.enterStreetName(streetName);
        if (apartmentNumber && apartmentNumber !== '') {
            this.enterApartmentNumber(apartmentNumber);
            }
        if (postofficeBox && postofficeBox !== '') {
            this.enterPostofficeBox(postofficeBox);
            }

        this.enterCity(city);
        this.enterState(state);
        this.enterZipCode(zipCode);
        this.enterCounty(county);
        this.clickVerifyAddressButton();
        this.clickSaveButton();
    }
}


export default new PolicyholderAddress()