class NetherlandsCovidData {
  affectedCases() {
    return cy.get(':nth-child(6) > .maincounter-number > span');
  }
  deathCases() {
    return cy.get(':nth-child(7) > .maincounter-number > span');
  }
  recoveredCases() {
    return cy.get('[style="margin-top:15px;"] > .maincounter-number > span');
  }
  affectedCasesLocation() {
    return ':nth-child(6) > .maincounter-number > span';
  }
  deathCasesLocation() {
    return ':nth-child(7) > .maincounter-number > span';
  }
  recoveredCasesLocation() {
    return '[style="margin-top:15px;"] > .maincounter-number > span';
  }
}
export default NetherlandsCovidData;
