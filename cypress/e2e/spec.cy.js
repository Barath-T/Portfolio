describe('first', () => {
  it('first test', () => {
    cy.visit('http://localhost:3000/');
    cy.contains("Barath T");

  })
})