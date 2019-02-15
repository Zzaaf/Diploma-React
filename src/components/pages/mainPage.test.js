import React from 'react';
import MainPage from './mainPage';
import {shallow} from 'enzyme';

describe('Testing <MainPage/>', () => {
    const main = shallow(<MainPage/>);
    describe('Testing snap & state', () => {
        it('MainPage has rendered correctly', () => {
            expect(main).toMatchSnapshot();
        });
    });
});