import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    //TEST 1
    test('The app should display 32 events by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has not specified a number of events to show', () => {
            AppWrapper = await mount(<App />);
        });

        when('the user loads the data', () => {
            AppWrapper.update();
        });

        then('the default number of displayed events will be 32', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });

    });

    //TEST 2
    test('When the user types a number into the textbox, the number of events displayed should match the input number', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = await mount(<App />);
        });

        when('the user types a number into the number of events textbox', () => {
            AppWrapper.update();
            AppWrapper.find('.numberOfEventsInput').simulate('change', { target: { value: '28' } });
        });
        then('the number of events displayed should match the number input by the user unless there are fewer events than the specified number.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });

});