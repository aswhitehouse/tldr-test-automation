describe('Shadow DOM Test - Should pass', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/');
    });
  
    it('Access and click element within Shadow DOM, using built in SD features, will pass', () => {
      cy.get('my-component', { shadow: true }).then(($element) => {
        const shadowRoot = $element[0].shadowRoot;
  
        cy.document({ log: false }).then((doc) => {
          const h1Element = doc.querySelector('my-component h1');
          expect(h1Element).to.exist;
          expect(h1Element.textContent).to.equal('Welcome to Shadow DOM Example');
  
          const buttonElement = doc.querySelector('my-component #my-button');
          expect(buttonElement).to.exist;
          cy.wrap(buttonElement).click();
        });
      });
    });
  });
  