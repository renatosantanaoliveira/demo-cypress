const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
  defaultCommandTimeout: 6000,
  viewportWidth: 1024,
  viewportHeight: 800,
  projectId: 'xxxx',

  e2e: {
    baseUrl: 'http://automationpractice.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
