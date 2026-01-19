import UWQuestions from "./PreQualifyingUWQuestions"

class PolicyUnderwritingQuestion
{
    clickUWQuestionsLink()
    {
        cy.get('a').contains("Underwriting Info").click();        
        cy.wait(5000)
        //cy.get('a').contains("Underwriting Questions").click();   
        cy.get("[id='P_L_V_v101w22_t21_c0w0_NB_GHC3']").click();
        //P_L_V_v101w22_t21_c0w0_NB_GHE3
        cy.wait(5000);
    }

    enterPolicyUnderwritingQuestins()
    {
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_45_1_1_45']").type('No{enter}');
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_46_1_1_46']").type('No{enter}');
       
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_77_1_1_77']").type('No{enter}');
        
        cy.wait(1000);

        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_78_1_1_78']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_79_1_1_79']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_80_1_1_80']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_81_1_1_81']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_82_1_1_82']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_83_1_1_83']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_84_1_1_84']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_85_1_1_85']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_86_1_1_86']").type('No{enter}');
        
        cy.wait(1000);

        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_87_1_1_87']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_88_1_1_88']").type('No{enter}');
        
        cy.wait(1000);
        cy.get("[name='ctl00$P$L$V$v101w22$t21$c0w0$NB$ITC3i0$TC$t3$modifier_id_89_1_1_89']").type('No{enter}');
        
        cy.wait(1000);

    }

}
export default PolicyUnderwritingQuestion;