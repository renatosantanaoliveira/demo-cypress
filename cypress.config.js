const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
  defaultCommandTimeout: 10000,
  viewportWidth: 1024,
  viewportHeight: 800,
  projectId: "bwg2kn",

  e2e: {
    baseUrl: 'http://automationpractice.com'
  },
});
