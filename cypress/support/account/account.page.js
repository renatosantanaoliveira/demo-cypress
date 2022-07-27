const el = require('../account/account.elements').accountElements

class AccountPage {
  validateLoadPage() {
    cy.get(el.head.title_page, { timeout: 6000 }).should(
      "contain.text",
      "My account"
    );
  }
}

export default new AccountPage();
