describe('New Test Case Form Test', () => {
  before(() => {
    cy.visit('/')
  })

  it('Has header text', () => {
    cy.get('#new-test-case-form-header-text').contains('New Test Case')
  })

  it('Has a Title form field', () => {
    cy.get('#new-test-case-title')
  })

  it('Has a Preconditions form field', () => {
    cy.get('#new-test-case-preconditions')
  })

  it('Has a Steps form field', () => {
    cy.get('#new-test-case-steps')
  })

  it('Has a Expected Results form field', () => {
    cy.get('#new-test-case-expected-results')
  })

  it('Has a Postconditions form field', () => {
    cy.get('#new-test-case-postconditions')
  })

  it('Has a Status form field', () => {
    cy.get('#new-test-case-status').click()
    cy.contains('Untested')
    cy.contains('Passed')
    cy.contains('Failed')
    cy.contains('Blocked')
  })

  it('Has a Submit button', () => {
    cy.get('#new-test-case-submit-btn')
  })
})
