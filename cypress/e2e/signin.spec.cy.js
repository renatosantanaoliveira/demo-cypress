/// <reference types="Cypress" />

import { faker } from "@faker-js/faker"

describe("Sign In", () => {
  it("Scenario 01: Sign up user", () => {
    cy.navigate("index.php?controller=authentication&back=my-account")

    const user = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        phoneMobile: faker.phone.number(),
        aliasRefer: faker.address.secondaryAddress()
    }

    cy.get("#email_create").type(user.email)
    cy.get("#SubmitCreate", {timeout: 6000}).click()

    cy.get("#id_gender1", {timeout: 10000}).click()
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
    cy.get('#firstname').type(user.firstName)
    cy.get('#lastname').type(user.lastName)
    cy.get('#address1').type(user.address)
    cy.get('#city').type(user.city)
    cy.get('#id_state', {timeout: 6000}).select('Arizona')
    cy.get('#postcode').type(user.zipCode)
    cy.get('#id_country', {timeout: 6000}).select('United States')
    cy.get('#phone_mobile').type(user.phoneMobile)
    cy.get('#alias').type(user.aliasRefer)
    cy.get('#submitAccount', {timeout: 6000}).click()

    cy.get('.page-heading', {timeout: 6000}).should('contain.text', 'My account')
    cy.get('.account > span').should('have.text', `${user.firstName} ${user.lastName}`)
  })
})
