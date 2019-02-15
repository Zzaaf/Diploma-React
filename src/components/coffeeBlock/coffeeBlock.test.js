import React from 'react';
import {shallow} from 'enzyme';
import CoffeeBlock from '../coffeeBlock';
import CoffeeService from '../../services/coffeeService';

describe('Testing <CoffeeBlock/>', () => {
    const service = new CoffeeService();
    const items = shallow(<CoffeeBlock/>);
    describe('Testing snap & state', () => {
        it('CoffeeBlock has rendered correctly', () => {
            expect(items).toMatchSnapshot();
        });
        it('CoffeeBlock state "posts" is array', () => {
            expect(items.state().posts).toBeArray();
        });
        it('CoffeeBlock state "typeError" is string', () => {
            expect(items.state().typeError).toBeString();
        });
        it('CoffeeBlock state "fatalError" is false', () => {
            expect(items.state().fatalError).toBeFalsy();
        });
    });
});