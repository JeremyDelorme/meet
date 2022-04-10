MEET APP

**

The objective of this app is to build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

**

User Stories:

1. As a user, I should be able to show/hide an event’s details, so that I can see more information about the event or hide it if I want to.
       
	- Scenario 1: An event element is collapsed by default.
		Given the user hasn’t clicked anything
		When events are displayed
		Then the event details should be collapsed
	- Scenario 2: User can expand an event to see its details.
		Given the user wants to see the details about an event
		When the user clicks on the event
		Then the event details should expand
	- Scenario 3: User can collapse an event to hide its details.
		Given the event details are expanded
		When the user clicks on collapse button
		Then the user should click see the event details collapsed

2. As a user, I should be able to see how many events are shown to me so that I can choose the amount of events I want to see.

	- Scenario 1: User hasn’t specified a number of events to see.
		Given the user hasn’t chosen how many events to see
		When the user opens the page
		Then the user should see 32 events by default
	- Scenario 2: User wants to specify the number of events to see per page
		Given the user wants to change the number of events to see per page
		When the user clicks a dropdown menu named "Show"
		Then the user should be able to choose how many events to show per page

3. As a user, I should be able to use the app offline, so that I can get the app’s information without an internet connection.

	- Scenario 1: The site shows the cached data when there’s no internet connection.
		Given the user didn’t have an internet connection
		When the user opens the app and has stored cache data
		Then the user should see all the previously stored data
	- Scenario 2: The site shows an error when the user changes the settings (city, time zone).
		Given the user didn’t have an internet connection
		When the user opens the app and has stored data
		Then the user should receive an error message telling them to connect to internet

4. As a user, I should be able to see a chart showing the number of upcoming events by city, so that I can clearly see the number of events happening in that city in the future.

	- Scenario 1: See a chart with the number of upcoming events in each city.
		Given the user has reached the "upcoming events » page
		When the user wants to see the number of upcoming events in each city
		Then the user should see a chart with the number of upcoming events in each city
 
5. 