describe('Shadow DOM Test - Should Fail', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('Attempts to access and click element within Shadow Dom, but will fail', () => {
    cy.get('my-component')
      .shadow()
      .find('h1')
      .should('contain', 'Welcome to Shadow DOM Example');

    cy.get('my-component')
      .shadow()
      .find('#my-button')
      .click();
  });
});
