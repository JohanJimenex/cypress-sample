// Este archivo contiene funciones utiles que se pueden reutilizar en diferentes archivos de prueba.
// igual que el POM, si no estuvieras aplicando POM pudieras colocar aqui las funciones reutilizables

Cypress.Commands.add("login", (username, password) => {
  cy.get("##user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

// More examples of custom commands:

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {   })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => {   })

// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => {   })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {   })
