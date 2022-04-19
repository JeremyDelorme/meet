import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });

    test('render change of events when user types in number of events less than 32', () => {
        const sliceOfData = mockData.slice(0, 1);
        const EventListWrapper = shallow(<EventList events={sliceOfData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(sliceOfData.length);
    });
});