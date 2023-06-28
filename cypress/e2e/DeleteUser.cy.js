import Login from "../POM/Login";
import Admin from "../POM/Admin";

describe('Delete User', function() {
  it('Delete User', function() {
    cy.fixture('OrangeHRM').then((data) => {
      cy.visit(data.URL)
      const ln = new Login()
      const ap = new Admin()
      ln.setUserName(data.username)
      ln.setPassword(data.password)
      ln.clickSubmit()
      ln.verifyLogin()
      ap.adminLink()
      cy.wait(5000)
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
      cy.wait(5000)
      cy.get(".oxd-table-cell.oxd-padding-cell:nth-child(2)").each(($el, index, $list) => {
        const cellText = $el.text();
        if (cellText.includes("Sa")) {          
          const $row = $el.closest(".oxd-table-row.oxd-table-row--with-border");
          const rowData = $row.find(".oxd-table-cell").map((_, cell) => Cypress.$(cell).text());
          cy.log(rowData.get().join(' | '));
          cy.wait(2000);
          cy.get("i[class='oxd-icon bi-trash']")
            .eq(index)
            .should('be.visible')
            .click({force:true});
          cy.get('.oxd-button--label-danger').click({force:true});
          cy.wait(2000)
        }
      })
    })
  })
})

