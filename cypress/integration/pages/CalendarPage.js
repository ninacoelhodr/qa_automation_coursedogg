class CalendarPage {
  
  locators = {
    dayCalendar: {
      class: '.day-13',
    },
    dayTitle: {
      main: '#main-content',
      text: '13'
    },
    navbar:{
      todaysEvents:{
        element:'a',
        text: 'Today’s Events'
      },
      searchInput:{
        role:'search'
      },
      featuredEvents: {
        element:'a',
        text: 'Featured Events'
      }
    },
    eventCard:{
      element:'a',
      role: 'listitem',
      class: '.card-content'
    },
    eventCardDetails:{
      elements:{
      button: 'button',
      label: 'label',
      h3: 'h3',
      },
      addToCalendar: 'Add to calendar',
      addToGoogleCalendar: 'Add to Google Calendar',
      eventType: 'Event Type',
      contacts: 'Contacts',
      organizedBy: 'Organized by',
      eventDescription: 'Event Description'
    },
    filters:{
      organization: '#orgSelect'
    }

  }

  clickDay() {
    cy.get(this.locators.dayCalendar.class).click();
  }

  validateDay(){
    cy.get(this.locators.dayTitle.main).contains(this.locators.dayTitle.text).should('exist')
  }
 
  clickTodayEvents() {
    cy.get(this.locators.navbar.todaysEvents.element).contains(this.locators.navbar.todaysEvents.text).click();
  }

  validateEmptyTodayEvents(message){
    cy.wait(1000)
    cy.get('h1').contains(message).should('exist')
  }

  validateOneTodayEvents(quantity){
    cy.get(`[role='${this.locators.eventCard.role}`).should('have.length', quantity)
  }

  searchInput(input){
    cy.get('.search__input').type(input).type('{enter}')
  }

  validateSearch(quantity, message){
    cy.wait(1000)
    cy.get('h1').contains(`Search results for "${message}"`).should('exist')
    cy.get(this.locators.eventCard.class).contains(message)
    cy.get(`[role='${this.locators.eventCard.role}`).should('have.length', quantity)
  }

  selectOrganization(organization){
    cy.get(this.locators.filters.organization).select(organization)
  }
  
  validateFilteringByOrg(quantity,organization){
    cy.get(`[role='${this.locators.eventCard.role}`).should('have.length', quantity)
    cy.get(this.locators.eventCard.class).contains(organization)
    cy.get(this.locators.filters.organization).contains(organization).should('be.selected')
    
  }

  changeDate(date){
    const dateArray = date.split("-")
    const todaysDate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime()
    cy.clock(todaysDate)
  }

  clickFeaturedEvents(){
    cy.get(this.locators.navbar.featuredEvents.element).contains(this.locators.navbar.featuredEvents.text).click();
  }
  
  clickOnEvent(nameEvent){
    cy.get(this.locators.eventCard.class).contains(nameEvent).click();
  }

  validateDetails(){
    cy.wait(1000)
    cy.get(this.locators.eventCardDetails.elements.button).contains(this.locators.eventCardDetails.addToCalendar).should('exist')
    cy.get(this.locators.eventCardDetails.elements.button).contains(this.locators.eventCardDetails.addToGoogleCalendar).should('exist')
    cy.get(this.locators.eventCardDetails.elements.label).contains(this.locators.eventCardDetails.eventType).should('exist')
    cy.get(this.locators.eventCardDetails.elements.label).contains(this.locators.eventCardDetails.contacts).should('exist')
    cy.get(this.locators.eventCardDetails.elements.label).contains(this.locators.eventCardDetails.organizedBy).should('exist')
    cy.get(this.locators.eventCardDetails.elements.h3).contains(this.locators.eventCardDetails.eventDescription).should('exist')
  }

}
  

export default CalendarPage;