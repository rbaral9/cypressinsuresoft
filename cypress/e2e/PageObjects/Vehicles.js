
class Vehicles
{
    vin="P_L_V_v101w22_t18_c0w0_PC_t1i0_VINInsTextBox_I";
    use="P_L_V_v101w22_t18_c0w0_PC_t1i0_UseTypeInsCombo_D_I";
    P_L_V_v101w22_t18_c0w0_PC_t1i1_UseTypeInsCombo_D_I
    tonnage="P_L_V_v101w22_t18_c0w0_PC_t1i0_c0w0modifier5_t2_modifier_id_135_21_3_135_I";


    clickVehiclesLink()
    {
     
        cy.get('a').contains("Vehicles").click();
        
        cy.wait(2000);

    }

    enterVehicleDetails(VinNo)
    {
        cy.get('a').contains("Add Vehicle").click();
        
        cy.wait(5000);


       // cy.get("[id='P_L_V_v101w22_t18_c0w0_PC_t1i0_VINInsTextBox_I']").type('2HGFC2F69LH557659{enter}');
       cy.get("[id='P_L_V_v101w22_t18_c0w0_PC_t1i0_VINInsTextBox_I']").type(VinNo+'{enter}');
       //cy.get("[id='P_L_V_v101w22_t18_c0w0_PC_t1i0_VINInsTextBox_I']").type('2HGFC2F69LH557659{enter}');


        cy.wait(5000);
        cy.get("[id='P_L_V_v101w22_t18_c0w0_PC_t1i0_UseTypeInsCombo_D_I']").type('Pleasure{enter}');
        
        cy.wait(2000);
        //P_L_V_v101w22_t18_c0w0_PC_t1i0_ExistingDamageInsCombo_D_DDD_PW-1
        cy.get("[name='ctl00$P$L$V$v101w22$t18$c0w0$PC$t1i0$ExistingDamageInsCombo$D']").type('No{enter}');
        cy.wait(1000);
        //ID=P_L_V_v101w22_t18_c0w0_PC_t1i0_AnnualMilesInsNumeric_AnnualMilesInsNumeric
        //name=ctl00$P$L$V$v101w22$t18$c0w0$PC$t1i0$AnnualMilesInsNumeric$AnnualMilesInsNumeric
        cy.get("[name='ctl00$P$L$V$v101w22$t18$c0w0$PC$t1i0$AnnualMilesInsNumeric$AnnualMilesInsNumeric']").type('15000');


        
        
        

        
    }

    saveVehicle()
    {
        
        cy.get("td[id='SaveToolStripButtonMiddle']").click({force: true});

    }




}

export  default Vehicles;
