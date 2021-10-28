import { And,Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";
import CalendarPage from "../pages/CalendarPage";

Given("that I'm on events page", () => {
  const home = new HomePage()
  home.visit()
})

Given("current date is {string}", (date) => {
  const calendarPage = new CalendarPage()
  calendarPage.changeDate(date)
})

When('I can only see events that happen on that day', () => {
  const calendarPage = new CalendarPage()
  calendarPage.validateDay()
})

When('I click on Todays events button', () => {
  const calendarPage = new CalendarPage()
  calendarPage.clickTodayEvents()
})

When('I search for an event {string}', (input) => {
  const calendarPage = new CalendarPage()
  calendarPage.searchInput(input)
})

When('I filter by Organization {string}', (organization) => {
  const calendarPage = new CalendarPage()
  calendarPage.selectOrganization(organization)
})

When('I click on Featured Events button', () => {
  const calendarPage = new CalendarPage()
  calendarPage.clickFeaturedEvents()
})

When('I click on event card name {string}', (nameEvent) => {
  const calendarPage = new CalendarPage()
  calendarPage.clickOnEvent(nameEvent)
})

Then('I select a specific date from the calendar', () => {
  const calendarPage = new CalendarPage()
  calendarPage.clickDay()
})

Then('I can see the message {string}', (message) => {
  const calendarPage = new CalendarPage()
  calendarPage.validateEmptyTodayEvents(message)
})

Then('I can see {int} event', (quantity) => {
  const calendarPage = new CalendarPage()
  calendarPage.validateOneTodayEvents(quantity)
})

Then('I can see the {int} event that matches {string}', (quantity,message) => {
  const calendarPage = new CalendarPage()
  calendarPage.validateSearch(quantity, message)
})

Then('I can see {int} events from that {string}', (quantity, organization) => {
  const calendarPage = new CalendarPage()
  calendarPage.validateFilteringByOrg(quantity,organization)
})

Then('I can see the event details', () => {
  const calendarPage = new CalendarPage()
  calendarPage.validateDetails()
})








