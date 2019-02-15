import React from 'react';
import {shallow} from 'enzyme';
import CoffeeService from '../../services/coffeeService';
import CoffeeItem from '../coffeeItem';
import ErrorMessage from '../errorMessage';

describe('Testing <CoffeeItem/>', () => {
    const service = new CoffeeService();
    const item = shallow(<CoffeeItem
            getData={service.getAllCoffee}
            />);
    describe('Testing snap & state', () => {
        it('CoffeeItem has rendered correctly', () => {
            expect(item).toMatchSnapshot();
        });
        it('CoffeeItem state "posts" is array', () => {
            expect(item.state().post).toBeArray();
        });
        it('CoffeeItem state "loading" is true', () => {
            expect(item.state().loading).toBeTruthy();
        });
        it('CoffeeItem state "error" is false', () => {
            expect(item.state().error).toBeFalsy();
        });
        it('CoffeeItem state "typeError" is string', () => {
            expect(item.state().typeError).toBeString();
        });
        it('CoffeeItem state "fatalError" is false', () => {
            expect(item.state().fatalError).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onError', () => {
            item.instance().onError(<ErrorMessage typeError='404'/>);
            expect(item.state().error).toBeTruthy();
            expect(item.state().loading).toBeFalsy();
        });
    });
});