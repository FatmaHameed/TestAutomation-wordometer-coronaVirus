import Home from './pages/home_page';
import NetherlandsCovidData from './pages/netherlands_data_page';

describe('Website provide covid data is accessible', () => {
  const home = new Home();
  const netherlandsData = new NetherlandsCovidData();

  beforeEach(() => {
    home.visitWebsite('https://www.worldometers.info/coronavirus/');
    cy.url().should('eq', 'https://www.worldometers.info/coronavirus/');
    home.goToNetherlandsData().contains('Netherlands').as('netherlandsPage');
  });

  it('test accessibility of the covid cases data in the website', () => {
    cy.contains('Coronavirus Cases:');
    home.affectedCases().should('not.be.null');

    cy.contains('Deaths');
    home.deathCases().should('not.be.null');

    cy.contains('Recovered');
    home.recoveredCases().should('not.be.null');
  });

  it('test accessibility to covid data in Netherlands', () => {
    cy.contains('Netherlands');
    cy.get('@netherlandsPage').click();
    cy.url().should(
      'eq',
      'https://www.worldometers.info/coronavirus/country/netherlands/',
    );

    cy.contains('Coronavirus Cases:');
    netherlandsData.affectedCases().should('not.be.null');

    cy.contains('Deaths');
    netherlandsData.deathCases().should('not.be.null');

    cy.contains('Recovered');
    netherlandsData.recoveredCases().should('not.be.null');
  });

  it('compare data in the website if they are same as in the API', () => {
    cy.get('@netherlandsPage').click();

    cy.request(
      'GET',
      'https://corona.lmao.ninja/v2/countries/netherlands',
    ).then((res) => {
      expect(res).to.have.property('status', 200);

      const affectedData = res.body.cases;
      const deathsData = res.body.deaths;
      const recoveredData = res.body.recovered;

      cy.assertEquality(
        netherlandsData.affectedCasesLocation(),
        affectedData.toLocaleString(),
      );

      cy.assertEquality(
        netherlandsData.deathCasesLocation(),
        deathsData.toLocaleString(),
      );

      cy.assertEquality(
        netherlandsData.recoveredCasesLocation(),
        recoveredData.toLocaleString(),
      );
    });
  });
});
