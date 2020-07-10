describe("Test Cases Data Table", () => {
  before(() => {
    cy.visit("/test_cases");
  });

  it("Has title text All Test Cases", () => {
    cy.get("h6").contains("All Test Cases");
  });

  it("Has a Title column", () => {
    cy.get("div").contains("Title");
  });

  it("Has a Description column", () => {
    cy.get("div").contains("Description");
  });

  it("Has a Status column", () => {
    cy.get("div").contains("Status");
  });

  it("Displays a Delete button when at least one row is selected", () => {
    cy.get('[type="checkbox"]').first().click();
    cy.get('button[title="Delete"]');
    cy.get('[type="checkbox"]').first().click();
    cy.get('button[title="Delete"]').should("not.exist");
  });
});
