import React, { Component } from 'react';

class NumberOfEvents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventCounter: 32,
            infoText: ''
        }
    }


    render() {
        const { infoText } = this.state;
        return (
            <div className="numberOfEvents">
                <input
                    type="integer"
                    className="numberOfEventsInput"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <p className="infoText">{infoText}</p>
            </div>
        );
    }
}

export default NumberOfEvents;