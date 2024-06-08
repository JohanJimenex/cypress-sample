/// <reference types="cypress" />

import LoginPage from "../../support/POM/LoginPage";

// const appUrl = "https://www.saucedemo.com";
const appUrl = "https://www.saucedemo.com/v1/index.html";

describe("Login Page Tests Cases", () => {

  beforeEach(() => {
    cy.visit(appUrl);
  });

  const loginPage = new LoginPage();

  it("Login success: with valid credentials", () => {
    loginPage.Login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("Login with invalid username", () => {
    loginPage.Login("user123", "secret_sauce");
    cy.get("[data-test='error']").should("be.visible");
  });

  it("Login with invalid password", () => {
    loginPage.Login("standard_user", "secret_sauce 123");
    cy.get("[data-test='error']").should("be.visible");
  });

  //Agrega mas casos de prueba mas para el login:
  
});
