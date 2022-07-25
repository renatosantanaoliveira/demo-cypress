/// <reference types="Cypress" />

describe("Page of product", () => {
  it("Scenario 01: Access the page of product", () => {
    cy.navigate(
      "/index.php?id_product=1&controller=product&search_query=T-shirts&results=1"
    );

    cy.get("#our_price_display").should("be.visible").and("not.be.empty");

    cy.get("#bigpic").should("have.attr", "alt");
  });
});
