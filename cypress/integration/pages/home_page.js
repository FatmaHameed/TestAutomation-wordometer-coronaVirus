class Home {
  visitWebsite(url) {
    return cy.visit(url);
  }
  affectedCases() {
    return cy.get(':nth-child(7) > .maincounter-number > span');
  }
  deathCases() {
    return cy.get(':nth-child(9) > .maincounter-number > span');
  }
  recoveredCases() {
    return cy.get('[style="margin-top:15px;"] > .maincounter-number > span');
  }
  goToNetherlandsData() {
    return cy.get(
      '#main_table_countries_today > :nth-child(2) > :nth-child(27) > [style="font-weight: bold; font-size:15px; text-align:left;"] > .mt_a',
    );
  }
}
export default Home;
