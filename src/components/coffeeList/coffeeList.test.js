import React from 'react';
import {shallow} from 'enzyme';
import CoffeeList from '../coffeeList';

describe('Testing <CoffeeList/>', () => {
    const items = shallow(<CoffeeList/>);
    describe('Testing snap & state', () => {
        it('CoffeeList has rendered correctly', () => {
            expect(items).toMatchSnapshot();
        });
        it('CoffeeList state "posts" is array', () => {
            expect(items.state().posts).toBeArray();
        });
        it('CoffeeList state "loading" is true', () => {
            expect(items.state().loading).toBeTruthy();
        });
        it('CoffeeList state "typeError" is string', () => {
            expect(items.state().typeError).toBeString();
        });
        it('CoffeeList state "fatalError" is false', () => {
            expect(items.state().fatalError).toBeFalsy();
        });
    });
});