class Logout{
    dropdownMenu = '.oxd-userdropdown-tab > .oxd-icon'
    logoutLink = ':nth-child(4) > .oxd-userdropdown-link'
    loginscreenLabel = '.oxd-text--h5'

    clickDropdown()
    {
        cy.get(this.dropdownMenu).click()
    }

    clickLogout()
    {
        cy.get(this.logoutLink).click()
    }
    verifyLogout()
    {
        cy.get(this.loginscreenLabel).should('have.text', 'Login')
    }
}

export default Logout