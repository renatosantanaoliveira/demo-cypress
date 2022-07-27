const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  $schema:"https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
  defaultCommandTimeout: 10000,
  viewportWidth: 1024,
  viewportHeight: 800,
  projectId: "bwg2kn",

  e2e: {
    // baseUrl: "http://automationpractice.com",
    setupNodeEvents(on, config) {
      //plugins...
      allureWriter(on, config);

      // if version not defined, use local
      const version = config.env.version || "dev";

      // load env from json
      config.env = require(`./cypress/config/${version}.json`);

      // change baseUrl
      config.baseUrl = config.env.baseUrl;

      return config;
    },
  },
});
