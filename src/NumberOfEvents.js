import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: "",
        errorText: ""
    }

    handleInputChanged = (numberOfEvents) => {
        const value = numberOfEvents.target.value;
        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
                errorText: 'Please enter a number between 1 and 32',
            })
        } else {
            this.setState({
                numberOfEvents: value
            });
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="integer"
                    className="numberOfEvents"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                />
                <ul className="inputNumberOfEvents">
                </ul>
            </div>
        );
    }
}

export default NumberOfEvents;