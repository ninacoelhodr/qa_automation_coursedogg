class HomePage {
  url = 'https://damian-events.coursedog.com'

  visit() {
    cy.visit(this.url);
  }
  
}

export default HomePage;