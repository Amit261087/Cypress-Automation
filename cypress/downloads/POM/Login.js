class Login{
    txtUserName = "input[name='username']"
    txtPassword = "input[name='password']"
    btnSubmit = "button[type='submit']"
    lblPageTitle = "//h6[normalize-space()='Dashboard']"
    setUserName(username)
    {
        cy.get(this.txtUserName).type('Admin');
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type('admin123');
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
        cy.on('window:alert', (b)=>{
            expect(b).contains("Change Your Password")
        })
    }

    verifyLogin()
    {
        cy.xpath(this.lblPageTitle).should('have.text', 'Dashboard');
    }
    

}

export default Login