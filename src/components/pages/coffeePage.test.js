import React from 'react';
import CoffeePage from './coffeePage';
import {shallow} from 'enzyme';

describe('Testing <CoffeePage/>', () => {
    const coffee = shallow(<CoffeePage/>);
    describe('Testing snap & state', () => {
        it('CoffeePage has rendered correctly', () => {
            expect(coffee).toMatchSnapshot();
        });
    });
});