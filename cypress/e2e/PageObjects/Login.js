
class Login
{
    
    setUserName(username)
    {
        //NewLoginControlInsUserControl_LoginButton_CD
        //NewLoginControlInsUserControl$LoginNameTextBox
        //NewLoginControl$LoginNameTextBox
        cy.get("input[name='NewLoginControlInsUserControl$LoginNameTextBox']").type(username);
    }
    setPassword(password)
    {
        //NewLoginControlInsUserControl$PasswordTextBox
        //NewLoginControl$PasswordTextBox
        //NewLoginControlInsUserControl_PasswordTextBox_I_CLND
        cy.get("input[id='NewLoginControlInsUserControl_PasswordTextBox_I_CLND']").type(password);
    }
    clickLoginButton()
    {
        //NewLoginControlInsUserControl_LoginButton_I
        //NewLoginControl_LoginLinkButton'
        //*[@id="NewLoginControlInsUserControl_LoginButton_I"]
        //*[@id="NewLoginControlInsUserControl_LoginButton_CD"]
        cy.get("*[id='NewLoginControlInsUserControl_LoginButton_CD']").click();
    }

    verifyLogin()
    {
        cy.title("fdfdfd").should('have.text',"");
    }
}

export default Login;
