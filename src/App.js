import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WarningAlert from './Alert'
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: "all",
    warningText: ''
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events,
          locations: extractLocations(events),
          warningText: ''
        });
      } else {
        getEvents().then((events) => {
          this.setState({
            events,
            locations: extractLocations(events),
            warningText: 'You are offline. The displayed event list may not be up to date.',
          });
        })
      }
    });
  }


  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.updateEvents(this.state.location, numberOfEvents)
  };

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        location,
        numberOfEvents: eventCount,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <WarningAlert text={warningText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents} />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateNumberOfEvents} />
      </div>
    );
  }
}

export default App;