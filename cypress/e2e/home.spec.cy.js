/// <reference types="Cypress" />

describe("Home", () => {
  beforeEach(() => {
    cy.navigate("/");
  });

  it("Scenario 01: Search product", () => {
    cy.get("#search_query_top")
      .should("be.empty")
      .type("T-shirts")
      .type("{enter}");
  });

  it("Scenario 02: Validate empty cart", () => {
    cy.get('[class="shopping_cart"]')
      .find("a")
      .find("span:nth-child(2)")
      .then(($el) => {
        expect($el).to.have.text("0");
      });
  });

  it("Scenario 03: Add product in cart", () => {
    cy.get("#search_query_top").type("T-shirts").type("{enter}");

    cy.get(".product_img_link", { timeout: 6000 }).click();

    cy.get("#quantity_wanted").should("be.empty").and("contain.value", 1);
    cy.get("#group_1", { timeout: 6000 }).select("M").and("have.value", 2);
    cy.get("#add_to_cart", { timeout: 6000 }).click();

    cy.get(".layer_cart_product", { timeout: 10000 }).should("be.visible");
    cy.get(".button-medium", { timeout: 10000 }).click();

    cy.get("#cart_title").then((value) => {
      expect(value.text()).to.have.string("Shopping-cart summary");
    });
    cy.get('[class="shopping_cart"]')
      .find("a")
      .find("span:nth-child(2)")
      .then(($el) => {
        expect($el).to.have.text("1");
      });
    cy.get("#cart_title")
      .find("span")
      .find("span")
      .then(($el) => {
        expect($el).to.have.text("1 Product");
      });
    cy.get("#product_1_3_0_0")
      .find("td")
      .should(($div) => {
        expect($div).to.have.length(7);
      });
  });
});
