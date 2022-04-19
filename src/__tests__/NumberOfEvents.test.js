
import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEventsInput')).toHaveLength(1);
    });

    test('component render infoText paragraph', () => {
        expect(NumberOfEventsWrapper.find('.infoText')).toHaveLength(1);
    });

    test('state (given from parent as prop) of eventCounter is 32 by default', () => {
        const eventCounter = NumberOfEventsWrapper.prop('eventCounter');
        expect(NumberOfEventsWrapper.find('.numberOfEventsInput').prop('value')).toBe(eventCounter);
    });

    test('component state of infoText is empty string by default', () => {
        const infoText = NumberOfEventsWrapper.state('infoText');
        expect(NumberOfEventsWrapper.find('.infoText').text('.infoText')).toBe(infoText);
    });

    test('component state when when user types number not in 1-32 range', () => {
        //I don't know how to do this test. I saw some people use the update method, but I donÙ't understand how to use it.
    })
});