/// <reference types="cypress" />

// Este archivo contiene funciones utiles que se pueden reutilizar en diferentes archivos de prueba.
// igual que el POM, si no estuvieras aplicando POM pudieras colocar aqui las funciones reutilizables

//O tambien se puede usar para crear tus propias funciones pero con mas poderes
//Por ejemplo, una funcion que haga click en un elemento pero ademas espere a que el elemento este presente,
//para evitar errores de que no se encuentra el elemento si la pagina tarda en cargar

//Ojo esto es una forma que trae cypress para crear funciones,
//pero tambien se puede hacer de la forma nativa con una funcion: ejem: function hacerClick(selector){ etc etc etc }
Cypress.Commands.add("hacerClick", (selectorDelElemento) => {
  cy.get(selectorDelElemento).should("exist").and("be.visible");
  cy.get(selectorDelElemento).click();
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
