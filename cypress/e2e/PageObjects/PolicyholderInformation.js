class PolicyholderInformation {
    constructor() {
    this.sel = {
        changeLink: 
           '#P_L_V_v101w22_t14_PolicyholderAddressLink',

        }
    }
    
    clickChangeLink(){
        return cy.get(this.sel.changeLink).click();
    }
    
    
}


export default new PolicyholderInformation()

