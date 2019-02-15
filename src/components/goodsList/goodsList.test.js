import React from 'react';
import GoodsList from './goodsList';
import {shallow} from 'enzyme';

describe('Testing <GoodsList/>', () => {
    const goods = shallow(<GoodsList/>);
    describe('Testing snap & state', () => {
        it('GoodsList has rendered correctly', () => {
            expect(goods).toMatchSnapshot();
        });
        it('GoodsList state "posts" is array', () => {
            expect(goods.state().posts).toBeArray();
        });
        it('GoodsList state "loading" is true', () => {
            expect(goods.state().loading).toBeTruthy();
        });
        it('GoodsList state "error" is false', () => {
            expect(goods.state().error).toBeFalsy();
        });
        it('GoodsList state "typeError" is string', () => {
            expect(goods.state().typeError).toBeString();
        });
        it('GoodsList state "fatalError" is false', () => {
            expect(goods.state().fatalError).toBeFalsy();
        });
    });
});