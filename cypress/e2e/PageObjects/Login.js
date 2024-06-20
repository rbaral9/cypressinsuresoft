
class Login
{
    
    setUserName(username)
    {
        cy.get("input[name='LoginControl$LoginNameTextBox']").type(username);
    }
    setPassword(password)
    {
        cy.get("input[name='LoginControl$PasswordTextBox']").type(password);
    }
    cliclLoginButton()
    {
        cy.get("a[id='LoginControl_LoginLinkButton']").click();
    }

    verifyLogin()
    {
        cy.title("fdfdfd").should('have.text',"");
    }
}

export default Login;
