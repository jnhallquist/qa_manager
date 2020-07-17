describe("Test Cases Data Table", () => {
  before(() => {
    cy.server();

    cy.fixture("test_cases.json")
      .then((response) => response.data)
      .as("test_casesJSON");

    cy.route("GET", "**/test_cases", "@test_casesJSON");

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

  it("Opens update test case dialog when table row is clicked on", () => {
    cy.get('#MUIDataTableBodyRow-0').click();
    cy.get("h6").contains("Update Test Case");
  });
});
