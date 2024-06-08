/// <reference types="cypress" />

class LoginPage {
  #inputUsername = "#user-name";
  #inputPassword = "#password";
  #buttonSubmit = "#login-button";

  Login(username, password) {
    //Se debe llamar el nombre d ela variable privada con this y con el simbolo # que incluye el nombre de la variable privada
    cy.get(this.#inputUsername).type(username);
    cy.get(this.#inputPassword).type(password);
    this.Submit();
  }

  Submit() {
    //Este es el metodo normal de hacer click de cypress
    //cy.get(this.#buttonSubmit).click();

    //Este es una funcion personalizada que se cree en la ruta cypress/support/commands.js, a los cuales Cypress le llama Comandos
    //Este comando "en teoria" es mejor que el click normal, ya que yo le puse que espere a que el elemento este presente y visible antes de hacer click
    cy.hacerClick(this.#buttonSubmit);
  }
}

export default LoginPage;
