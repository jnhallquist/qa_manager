describe("Update Test Case Dialog", () => {
  before(() => {
    cy.server();

    cy.fixture("test_cases.json")
      .then((response) => response.data)
      .as("test_casesJSON");

    cy.route("GET", "**/test_cases", "@test_casesJSON");

    cy.visit("/test_cases");

    cy.get("#MUIDataTableBodyRow-0").click();
  });

  it("Has title text Update Test Case", () => {
    cy.get("h6").contains("Update Test Case");
  });

  it("Has a Save button", () => {
    cy.get("button").contains("Save");
  });

  it("Has a Close button", () => {
    cy.get("#close-dialog-button");
  });

  it("Has a Title form field", () => {
    cy.get("#test-case-title");
  });

  it("Has a Description form field", () => {
    cy.get("#test-case-description");
  });

  it("Has a Preconditions form field", () => {
    cy.get("#test-case-preconditions");
  });

  it("Has a Steps form field", () => {
    cy.get("#test-case-steps");
  });

  it("Has a Expected Results form field", () => {
    cy.get("#test-case-expected-results");
  });

  it("Has a Postconditions form field", () => {
    cy.get("#test-case-postconditions");
  });

  it("Has a Status form field", () => {
    cy.get("#test-case-status").click();
    cy.contains("Untested");
    cy.contains("Passed");
    cy.contains("Failed");
    cy.contains("Blocked");
  });

  it("Closes dialog when close button clicked", () => {
    cy.get("#close-dialog-button").click({ force: true });
    cy.get("h6").contains("Update Test Case").should("not.exist");
  });
});
