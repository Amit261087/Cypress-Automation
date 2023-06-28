class Admin{
    txtAdminLink = ':nth-child(1) > .oxd-main-menu-item > .oxd-text'
    lblAdminPage = '.oxd-topbar-header-breadcrumb-module'
    btnAdd = '.orangehrm-header-container > .oxd-button'
    lblAddUser = '.orangehrm-card-container > .oxd-text--h6'
    lblAddButton = '.orangehrm-header-container > .oxd-button'
    lblUserRole = "//label[normalize-space()='User Role']"
    

    verifyLabelUserRole()
    {
        cy.xpath(this.lblUserRole).should('have.text', 'User Role')
    }

    adminLink()
    {
        cy.get(this.txtAdminLink).click()
    }

    verifyAdminPage()
    {
        cy.get(this.lblAdminPage). should('have.text', 'Admin')
    }

    clickAddButton()
    {
        cy.get(this.btnAdd).click()
    }

    verifyAddUserPage()
    {
        cy.get(this.lblAddUser).should('have.text', 'Add User')
    }

    verifyAddButton()
    {
        cy.get(this.lblAddButton).should('be.visible')
    }
}

export default Admin