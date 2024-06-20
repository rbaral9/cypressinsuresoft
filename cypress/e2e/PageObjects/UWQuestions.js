import UWQuestions from "./PreQualifyingUWQuestions"

/**
 * 
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_45_1_1_45_0_I

P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_46_1_1_46_0_I

P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_77_1_1_77_0_I

P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_78_1_1_78_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_79_1_1_79_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_80_1_1_80_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_81_1_1_81_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_82_1_1_82_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_83_1_1_83_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_84_1_1_84_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_85_1_1_85_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_86_1_1_86_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_87_1_1_87_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_88_1_1_88_0_I
P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_89_1_1_89_0_I
*/

class PolicyUnderwritingQuestion
{
    

    clickUWQuestionsLink()
    {
     
        cy.get('a').contains("Underwriting Info").click();
        
        cy.wait(5000);
        
        //id="P_L_V_v101w22_t22_c0w0_NB_GHC3"

        cy.get("[id='P_L_V_v101w22_t22_c0w0_NB_GHC3']").click();



        //cy.get('img[class^="dxWeb_nbCollapse_Metropolis dxnb-btn"]').click();

        //cy.get('span').contains("Underwriting Questions").click();
        
        cy.wait(5000);

       // Underwriting Questions

    }

    enterPolicyUnderwritingQuestins()
    {
        //cy.get("[id='P_L_V_v101w22_t22_c0w0_NB_ITC3i0_t3_0_modifier_id_45_1_1_45_0_I']").type('No{enter}');
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_45_1_1_45']").type('No{enter}');

        


        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_46_1_1_46']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_77_1_1_77']").type('No{enter}');
        
        cy.wait(1000);

        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_78_1_1_78']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_79_1_1_79']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_80_1_1_80']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_81_1_1_81']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_82_1_1_82']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_83_1_1_83']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_84_1_1_84']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_85_1_1_85']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_86_1_1_86']").type('No{enter}');
        
        cy.wait(1000);

        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_87_1_1_87']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_88_1_1_88']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t22$c0w0$NB$ITC3i0$TC$t3$modifier_id_89_1_1_89']").type('No{enter}');
        
        cy.wait(1000);

    }

}
export default PolicyUnderwritingQuestion;