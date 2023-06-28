import 'cypress-iframe'
require('@4tw/cypress-drag-drop')


describe('Mouse Actions', function(){


    it('Mouse Hover', function(){
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store')
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')
    })

    it('Right Click', function(){
        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
        //Approach1
        //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        //cy.get('.context-menu-icon-copy>span').should('be.visible')

        //Approach2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-icon-copy>span').should('be.visible')

    })

    it('Double Click', function(){
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult')

        //Approach1

        //cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        //cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')

        //Approach 2 - doubleclick()

        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value', 'Hello World!')



    })

    it('Drag & Drop', function(){
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.get('#box6').drag('#box106',{force:true})
    })

    it.only('Scroll page', function(){
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(":nth-child(1)>tbody>:nth-child(86)>:nth-child(1)>img").scrollIntoView({duration:10000})
        cy.get(":nth-child(1)>tbody>:nth-child(86)>:nth-child(1)>img").should('be.visible')
        cy.wait(2000)
        cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2)').scrollIntoView({duration:10000})
        cy.get(':nth-child(2) > tbody > :nth-child(3) > :nth-child(2)').should('be.visible')

        cy.get('#footer').scrollIntoView({duration:10000})
    })
})