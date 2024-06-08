/// <reference types="cypress" />

import LoginPage from "../../support/POM/LoginPage";

describe("Login Page Tests Cases", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  const loginPage = new LoginPage();

  it("Login success", () => {
    loginPage.Login("standard_user", "secret_sauce");
    loginPage.Submit();
    cy.url().should("include", "/inventory.html");
  });

  it("Login with invalid username", () => {
    loginPage.Login("user123", "secret_sauce");
    loginPage.Submit();
    cy.get("[data-test='error']").should("be.visible");
  });

  it("Login with invalid password", () => {
    loginPage.Login("standard_user", "secret_sauce 123");
    loginPage.Submit();
    cy.get("[data-test='error']").should("be.visible");
  });

  //Agrega dos casos de prueba mas para el login:

  



});
