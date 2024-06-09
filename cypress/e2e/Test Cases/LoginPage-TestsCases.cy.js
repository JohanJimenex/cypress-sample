/// <reference types="cypress" />

import LoginPage from "../../support/POM/LoginPage";
import Utils, { generateRandomNumber } from "../../support/utils";

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

  // Si colocas una x delante del xit() no se ejecutará este caso de prueba
  it("Login with invalid password", () => {
    //Importamos esta funcion en la linea 4, que creé en cypress/support/utils.js que genera un número aleatorio
    const randomString = generateRandomNumber();
    //otra forma usando la clase y metodo staticos de la clase utils
    const randomString2 = Utils.generateRandomNumber();

    loginPage.Login("standard_user", randomString2);
    cy.get("[data-test='error']").should("be.visible");
  });

  it("Login with valid username and password", async () => {
    const data = await cy.fixture("example.json");
    loginPage.Login(data.validUsername, data.validPassword);

    cy.get(".product_label").should("be.visible");
  });

  //Agrega mas casos de prueba mas para el login:
});
