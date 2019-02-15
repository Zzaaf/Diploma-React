import React from 'react';
import PleasurePage from './pleasurePage';
import {shallow} from 'enzyme';

describe('Testing <PleasurePage/>', () => {
    const pleasure = shallow(<PleasurePage/>);
    describe('Testing snap & state', () => {
        it('PleasurePage has rendered correctly', () => {
            expect(pleasure).toMatchSnapshot();
        });
    });
});