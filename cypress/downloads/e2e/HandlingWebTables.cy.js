describe('Handle Table', function(){

    beforeEach('Login', function(){
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        cy.title().should('eq', 'Dashboard')
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    })

    it('Check Number Rows & Columns', function(){
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', 10)
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', 7)
       
    })

    it.only('check cell data from specific row & column', function(){
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("xvrt@test.com")
    })

    it('Read All the rows & columns from 1st page', function(){
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get("td").each(($col, index, $cols)=>{
                        cy.log($col.text())
                    })
                })
            })
    })

    it('Pagination', function(){
        let totalpages
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text()
            totalpages=mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
            cy.log("Total Number of Pages in Table are: "+totalpages)
        })

        let page=10
        for (let p=1; p<=page; p++){
            if (page>1){
                cy.log("Active Page is: "+p)
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click()
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get("td").each(($col, index,$cols)=>{
                                cy.log($col.text())
                            })
                        })
                    })

            }

        }
    })


})