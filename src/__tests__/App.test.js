import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';


//UNIT TESTING
describe("<App /> component", () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test("render Eventlist component", () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test("render CitySearch component", () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test("render NumberOfEvents component", () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

//INTEGRATION TESTING
describe('<App /> integration', () => {
    test('App passes "events" state as a prop to EventList', () => {
        let AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    test('App passes "locations" state as a prop to CitySearch', () => {
        let AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const eventsToShow = mockData.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        expect(AppWrapper.state('events')).toEqual(mockData);
        AppWrapper.unmount();
    });

    test("Passing the number of events", () => {
        const AppWrapper = mount(<App />);
        const AppNumberOfEventsState = AppWrapper.state("numberOfEvents");
        expect(AppNumberOfEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().numberOfEvents).toEqual(32);
        AppWrapper.unmount();
    });

    //NUMBER OF EVENTS

    test("Number of events by default should be 32", () => {
        let AppWrapper = mount(<App />);
        expect(AppWrapper.state("numberOfEvents")).toBe(32);
        AppWrapper.unmount();
    });

    test("When number input changes, state has to be updated", async () => {
        let AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 16 } };
        await NumberOfEventsWrapper.find(".numberOfEventsInput").at(0).simulate("change", eventObject);

        expect(AppWrapper.state("numberOfEvents")).toBe(16);
        AppWrapper.unmount();
    });

    test("When number of events is higher than the number of events available, show all events", async () => {
        let AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 3 } };
        await NumberOfEventsWrapper.find(".numberOfEventsInput").at(0).simulate("change", eventObject);

        AppWrapper.update();
        const EventListWrapper = AppWrapper.find(EventList);
        expect(AppWrapper.state("events")).toHaveLength(2);
        expect(EventListWrapper.props().events).toHaveLength(2);
        AppWrapper.unmount();
    });

    test("When number of events is lower than the number of events available, show all events", async () => {
        let AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 1 } };
        await NumberOfEventsWrapper.find(".numberOfEventsInput").simulate("change", eventObject);

        AppWrapper.update();
        const EventListWrapper = AppWrapper.find(EventList);
        expect(AppWrapper.state("events")).toHaveLength(1);
        expect(EventListWrapper.props().events).toHaveLength(1);
        AppWrapper.unmount();
    });
});