Feature: Search for Events
    
    Scenario: Select a specific date from the calendar
        Given that I'm on events page
        When I select a specific date from the calendar
        Then I can only see events that happen on that day
    
    Scenario: Todays events is empty
        Given that I'm on events page
        And current date is '2021-09-02'
        When I click on Todays events button
        Then I can see the message 'No events today'
    
    Scenario: Todays events have one event
        Given that I'm on events page
         And current date is '2021-11-20'
         When I click on Todays events button
         Then I can see 1 event
    
    Scenario: Search for events
        Given that I'm on events page
        When I search for an event 'Tokyo'
        Then I can see the 1 event that matches 'Tokyo'
    
    Scenario: Filter by Organization
        Given that I'm on events page
        When I filter by Organization 'Model UN'
        Then I can see 3 events from that 'Model UN'
    
    Scenario: Featured Events is empty
        Given that I'm on events page
        And current date is '2021-11-20'
        When I click on Featured Events button
        Then I can see the message 'There are no upcoming featured events'
    
    Scenario: Featured Events have 3 events
        Given that I'm on events page
        And current date is '2021-09-02'
        When I click on Featured Events button
        Then I can see 3 event
    
    Scenario: Click one event card
        Given that I'm on events page
        And current date is '2021-09-02'
        When I search for an event 'QA'
        And I click on event card name 'QA Task Submission'
        Then I can see the event details