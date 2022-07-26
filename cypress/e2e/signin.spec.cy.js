/// <reference types="Cypress" />

import { faker } from "@faker-js/faker"

describe("Sign In", () => {
  it("Scenario 01: Sign up user", () => {
    cy.navigate("index.php?controller=authentication&back=my-account")

    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    }

    cy.get("#email_create").type(user.email)
    cy.get("#SubmitCreate").click()

    cy.get("#id_gender1", {timeout: 6000}).click()
    cy.get("#customer_firstname").type(user.firstName)
    cy.get("#customer_lastname").type(user.lastName)
    cy.get("#email", {timeout: 6000}).then((value) => {
      expect(value).to.have.value(user.email)
    })
    cy.get("#passwd").type("Test@54321")
    cy.get('#days').select('10').and('have.value', 10)
    cy.get('#months').select('February').should('have.value', 2)

    const yearBirthday = '1980'
    cy.get('#years').select(yearBirthday).then((text) => {
        expect(text.text()).to.have.string(yearBirthday)
    })
    cy.get('#firstname').type(faker.name.firstName())
  })
})
