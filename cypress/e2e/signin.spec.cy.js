/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";
import signin from "../support/signin/signin.page";
import account from "../support/account/account.page";

describe("Sign In", () => {
  before(() => {
    cy.navigate("/index.php?controller=authentication&back=my-account");
  });
  it("Scenario 01: Sign up user", () => {
    const email = faker.internet.email();

    signin.fillInemail(email);
    signin.clickInSubmit();

    signin.fillInRegistration(email);

    account.validateLoadPage();
    signin.validateRegisterSuccessfully();
  });
});
