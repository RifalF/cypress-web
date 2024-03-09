import * as objects from "../objects/pages.js";

before(() => {
  cy.config("defaultCommandTimeout", 70000);
});

describe("Orange HR - Login", () => {
  it("should success login", () => {
    cy.visit(Cypress.env("baseUrl"));
    cy.get(objects.input_username).type("Admin");
    cy.get(objects.input_password).type("admin123");
    cy.get(objects.button_submit).click();
    cy.get(objects.img_logo).should("be.visible");
  });
});