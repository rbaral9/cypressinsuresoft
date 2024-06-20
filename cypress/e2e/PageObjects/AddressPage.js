
class Address
{
    checkNewClientExistsAndClick()
    {

       /*  cy.get('span').contains("New Client").then($el => {
            if (!$el.length) return ;
            // Element exists, do something
            cy.get('span').contains("New Client").click({force: true});

            
            });
 */
           
            cy.get('body').then($body => {
                // If the element doesn't exist, exit the callback
                if (!$body.find('span:contains("New Client")').length) return;
             
                 // If it does, click on it
                 cy.get('span').contains("New Client").click({force: true});
             });

/*         cy.get('span').contains("New Client").should('not.exist').then(($element) => {

            if ($element.length> 0){
                cy.get('span').contains("New Client").click({force: true});
            } else {
                //Do Something
            }
        }) */
    }
    

    clickAddressLink()
    {
        cy.get("a[id='P_L_V_v101w22_t14_PolicyholderAddressLink']").click();
    }
    enterAddress(stNo,stAddress)
    {
        cy.get("input[id='P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_HouseNumber']").type(stNo);
        
        
        cy.get("input[id='P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_StreetName']").type(stAddress);
    }

    saveAddress()
    {
        cy.get("td[id='SaveInsImageButtonMiddle']").click({force: true});

    }

    
}

export default Address;
