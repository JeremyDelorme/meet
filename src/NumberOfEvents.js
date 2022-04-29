import React, { Component } from "react";
import PropTypes from "prop-types";

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventCounter: props.numberOfEvents,
      infoText: ""
    };
  }

  handleInputChanged = event => {
    const newCounter = event.target.value;
    if (newCounter > 32 || newCounter < 1) {
      this.setState({
        eventCounter: 32,
        infoText: "Please write a number"
      });
    } else {
      this.setState({
        eventCounter: newCounter,
        infoText: ""
      });
    }
    this.props.updateNumberOfEvents(newCounter);
  };

  render() {
    const { infoText, eventCounter } = this.state;
    return (
      <div className="numberOfEvents">
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
