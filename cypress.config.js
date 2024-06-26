const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: "hqhewt",
    defaultCommandTimeout: 10000,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },

        specPattern: 'cypress/integration/*.js',
        testIsolation: false
    }
});
