import * as objects from "../objects/pages.js";

before(() => {
  cy.config("defaultCommandTimeout", 50000);
});

describe("Orange HR - Dashboard", () => {
    beforeEach(() => {
        cy.login("Admin", "admin123");
    });
    
    it("Open page recruitment", () =>{
        cy.get("a[href*='recruitment']").parent("li").click();
    });

    it("type search", () => {
        cy.get("input[placeholder='Search']").type("Search Word");
    });

});
  