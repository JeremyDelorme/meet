import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        eventCount: 32
    }

    handleInputOnChange = (eventCount) => {
        this.props.updateEvents(eventCount)
    }

    render() {
        const { eventCount } = this.state;

        return (
            <div className='numberOfEvents'>
                <input
                    type='number'
                    className='inputNumberOfEvents'
                    onChange={this.handleInputOnChange}
                    value={eventCount}
                />
            </div>
        )
    }
}

export default NumberOfEvents;