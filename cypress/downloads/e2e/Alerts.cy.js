describe('Alerts', ()=> {

    it('JS alerts', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        cy.get('#result').should('have.text', 'You successfully clicked an alert')

        

    })

    it('JS confirm alert', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (a)=>{
            expect(a).to.contains('I am a JS Confirm')

        })

        cy.get('#result').should('have.text', 'You clicked: Ok')

    })

    it('JS confirm alert with cancel', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (a)=>{
            expect(a).to.contains('I am a JS Confirm')

        })

        cy.on('window:confirm', ()=> false)

        cy.get('#result').should('have.text', 'You clicked: Cancel')

    })

    it('JS prompt alert', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        cy.get('#result').should('have.text', 'You entered: welcome')
        
        cy.on('window:prompt', ()=> false)

    })

    it('Authenticated Alert - approach1', ()=> {

        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")


    })

    it('Authenticated Alert - approach2', ()=> {

        cy.log("logged in successfully", cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth"))
        cy.get("div[class='example'] p").should('have.contain', "Congratulations")


    })

    //it('Authenticated Alert - enter username/password manually', ()=> {

        //cy.visit("https://the-internet.herokuapp.com/basic_auth")
        //cy.get("div[class='example'] p").should('have.contain', "Congratulations")


    //})

})