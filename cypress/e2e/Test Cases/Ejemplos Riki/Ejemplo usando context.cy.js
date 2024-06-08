//Esto es para que visual studio code use el autocompletado y ayuda
/// <reference types="cypress" />

import LoginPage from "../../../support/POM/LoginPage";

// const appUrl = "https://www.saucedemo.com";
const appUrl = "https://www.saucedemo.com/v1/index.html";

describe("Login Page Tests Cases", () => {
  beforeEach(() => {
    cy.visit(appUrl);
  });

  const loginPage = new LoginPage();

  //Este es un ejemplo de como se puede usar context para agrupar aun mas los casos de prueba, en este caso para los positivos
  context("Happy Paths or Positive Tests usando el metodo context", () => {
    it("Login success: with valid credentials", () => {
      loginPage.Login("standard_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });

    it("Login success: with slow page", () => {
      loginPage.Login("performance_glitch_user", "secret_sauce");
      cy.url().should("include", "/inventory.html");
    });

    //Agregar mas casos de pruebas que sean con el login exitoso
  });

  //Este es un ejemplo de como se puede usar context para agrupar aun mas los casos de prueba, en este caso para los negativos
  context("Negative Test Cases", () => {
    it("Login with invalid username", () => {
      loginPage.Login("user123", "secret_sauce");
      cy.get("[data-test='error']").should("be.visible");
    });

    it("Login with invalid password", () => {
      loginPage.Login("standard_user", "secret_sauce 123");
      cy.get("[data-test='error']").should("be.visible");
    });
  });
});
