import { faker } from "@faker-js/faker";
const el = require('../signin/signin.elements').signinElements
const elAccount = require('../account/account.elements').accountElements

const user = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCodeByState('AZ'),
  phoneMobile: faker.phone.number('020 #### ####'),
  aliasRefer: faker.address.secondaryAddress(),
};

class SignInPage {
  fillInemail(text) {
    cy.get(el.email_create).type(text);
  }

  clickInSubmit() {
    cy.get(el.btn_create_user, { timeout: 6000 }).click();
  }

  fillInRegistration(email) {
    cy.wait(10000);

    cy.get(el.gender, { timeout: 10000 }).click();
    cy.get(el.first_name).type(user.firstName);
    cy.get(el.last_name).type(user.lastName);
    cy.get(el.email, { timeout: 6000 }).then((value) => {
      expect(value).to.have.value(email);
    });
    cy.get(el.password).type("Test@54321");
    cy.get(el.day_bht).select("10").and("have.value", 10);
    cy.get(el.month_bth).select("February").should("have.value", 2);

    const yearBirthday = "1980";
    cy.get(el.year_bth)
      .select(yearBirthday)
      .then((text) => {
        expect(text.text()).to.have.string(yearBirthday);
      });
    cy.get(el.first_name).type(user.firstName);
    cy.get(el.last_name).type(user.lastName);
    cy.get(el.address_one).type(user.address);
    cy.get(el.city).type(user.city);
    cy.get(el.state, { timeout: 6000 }).select("Arizona");
    cy.get(el.zip).type(user.zipCode);
    cy.get(el.country, { timeout: 6000 }).select("United States");
    cy.get(el.phone_mobile).type(user.phoneMobile);
    cy.get(el.address_two).type(user.aliasRefer);
    cy.get(el.btn_submit_account, { timeout: 6000 }).click();
  }

  validateRegisterSuccessfully() {
    cy.get(elAccount.head.profile_user).should(
      "have.text",
      `${user.firstName} ${user.lastName}`
    );
  }
}

export default new SignInPage();
