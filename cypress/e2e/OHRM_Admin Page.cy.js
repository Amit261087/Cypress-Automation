import Login from "../POM/Login";
import Admin from "../POM/Admin";

describe('Admin Page', function(){
    it('Verify Admin Page', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        const ap=new Admin()
        ap.adminLink()
        ap.verifyAdminPage()
    })

    it('Verify Add buton on Admin Page', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        const au = new Admin()
        au.adminLink()
        au.verifyAdminPage()
        au.verifyAddButton()

    })

    it('Click on Add button and verify the Add page', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        const au = new Admin()
        au.adminLink()
        au.verifyAdminPage()
        au.clickAddButton()
        au.verifyAddUserPage()
    })

    it('Verify Fields on Add User Page', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const ln=new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
        const au = new Admin()
        au.adminLink()
        au.clickAddButton()
        au.verifyLabelUserRole()
        //cy.xpath("//label[normalize-space()='User Role']").should('have.text', 'User Role')
    })
})