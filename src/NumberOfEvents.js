import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props)

    this.state = {
      eventCounter: props.numberOfEvents,
      errorText: ''
    }
  }

  handleInputChanged = (event) => {
    const newCounter = (event.target.value);
    if (newCounter > 32 || newCounter < 1) {
      this.setState({
        eventCounter: 32,
        errorText: 'Please write a number from 1 to 32',
      })
    } else {
      this.setState({
        eventCounter: newCounter,
        infoText: ''
      });
    }
    this.props.updateNumberOfEvents(newCounter);
  }


  render() {
    const { errorText, eventCounter } = this.state;
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={errorText} />
        <p className="numbercount">Number of events</p>
        <input
          type="number"
          className="numberOfEventsInput"
          placeholder="Number of events"
          value={eventCounter}
          onChange={this.handleInputChanged}
        />
        <p className="infoText">{infoText}</p>
      </div>
    );
  }
}

export default NumberOfEvents;