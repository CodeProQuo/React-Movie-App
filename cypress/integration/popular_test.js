describe('Popular Movies', function() {
  it('Visits the Popular Movies page', function() {
    cy.viewport()
    cy.visit('http://localhost:3000/')

    cy.contains("Popular")
  })
})