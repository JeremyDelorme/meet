import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from 'enzyme';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render number of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render input field for number of events', () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });

    test('change number of events when input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: '13' });
        NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', { target: { value: '13' } });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual('13');
    });
})