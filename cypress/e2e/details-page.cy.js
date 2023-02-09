describe('Details Page', () => {
  it('renders pokemon with number and name', () => {
    cy.visit('/');
    cy.findByRole('link', { name: /go to pokedex/i }).click();
    cy.findByRole('link', { name: /view entry for charmander/i }).click();

    cy.findByRole('heading', { name: /#4 - charmander/i }).should('be.visible');
    cy.findByText(/fire/i).should('be.visible');
  });
});
