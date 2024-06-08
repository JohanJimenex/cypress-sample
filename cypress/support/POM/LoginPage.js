class LoginPage {
  #inputUsername = "#user-name";
  #inputPassword = "#password";
  #buttonSubmit = "#login-button";

  Login(username, password) {
    cy.get(inputUsername).type(username);
    cy.get(inputPassword).type(password);
  }

  Submit() {
    cy.get(buttonSubmit).click();
  }
}

export default LoginPage;
