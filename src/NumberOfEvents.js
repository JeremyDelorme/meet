import React, { Component } from 'react';

class NumberOfEvents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            eventCounter: 32,
            infoText: ''
        }
    }

    handleInputChanged = (event) => {
        const newCounter = event.target.value;
        if (isNaN(newCounter) || newCounter < 1) {
            this.setState({
                eventCounter: '',
                infoText: 'Please write a number',
            })
        } else {
            this.setState({
                eventCounter: newCounter,
                infoText: ''
            });
        };
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