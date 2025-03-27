class LoginPage
{
    getEmail()
    {
        return cy.get('#userEmail')
    }
    getPassword()
    {
        return cy.get('#userPassword')
    }
    getLoginClick()
    {
        return cy.get('#login')
    }
}
export default LoginPage;