const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Esto es para que Cypress ignore las carpetas de ejemplos
    excludeSpecPattern: ["*/**/Ejemplos Basicos", "*/**/Ejemplos Avanzados"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
