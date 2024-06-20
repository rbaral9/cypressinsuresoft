
class UWQuestions
{
    UWQuestion1="P_L_V_v101w22_t15_modifier_id_76_2_1_76_I";
    UWQuestion2="P_L_V_v101w22_t15_modifier_id_74_2_1_74_I"
    UWQuestion3="P_L_V_v101w22_t15_modifier_id_75_2_1_75_I"

    clickUWQuestionsLink()
    {
        cy.get('a').contains("Pre-Qualifying UW Questions").click();
    }
    enterUWQuestions()
    {
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_76_2_1_76_I']").click();
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_76_2_1_76_I']").type("No");

        cy.get("td[id='P_L_V_v101w22_t15_modifier_id_76_2_1_76_DDD_L_LBI2T1']").click({force: true});
        //<td id="P_L_V_v101w22_t15_modifier_id_76_2_1_76_DDD_L_LBI2T1" 
        
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_74_2_1_74_I']").click({force: true});
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_74_2_1_74_I']").type("No");

        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_75_2_1_75_I']").click({force: true});
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_75_2_1_75_I']").type("No");
        
        cy.get("input[id='P_L_V_v101w22_t15_modifier_id_74_2_1_74_I']").click({force: true});

        
       // cy.get("input[id='P_L_V_v101w22_t14_c0w0_t2_ExpandedNameControl_StreetName']").type(stAddress);
    }

    saveAddress()
    {
        cy.get("td[id='SaveInsImageButtonMiddle']").click({force: true});

    }
    enterDriverDetails()
    {

        cy.find("input[id='P_L_V_v101w2_t17_c0w0_PC_t1i0_c0w0_t0_InsName_Last']")

    }
    
}

export default UWQuestions;
