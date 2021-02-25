Cypress.Commands.add('assertEquality', (elementLocation, data) => {
  const element = cy.get(elementLocation);
  element.invoke('text').then((text) => {
    if (text == 'N/A') {
      text = '0';
      expect(text).equal(data);
    } else {
      expect(text.trim()).equal(data);
    }
  });
});
