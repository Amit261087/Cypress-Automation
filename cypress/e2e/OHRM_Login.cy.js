import Login from "../POM/Login"
describe('POM', function(){
    it('Login', function(){
        cy.fixture('OrangeHRM').then((data)=>{
            cy.visit(data.URL)
            const login=new Login()
            login.setUserName(data.username)
            login.setPassword(data.password)
            login.clickSubmit()
            login.verifyLogin() 
        })
        
    })
})