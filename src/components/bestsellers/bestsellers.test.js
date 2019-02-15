import React from 'react';
import Bestsellers from './bestsellers';
import ErrorMessage from '../errorMessage';
import {shallow} from 'enzyme';

describe('Testing <Bestsellers/>', () => {
    const best = shallow(<Bestsellers/>);
    describe('Testing snap & state', () => {
        it('Bestsellers has rendered correctly', () => {
            expect(best).toMatchSnapshot();
        });
        it('Bestsellers state "posts" is array', () => {
            expect(best.state().posts).toBeArray();
        });
        it('Bestsellers state "loading" is true', () => {
            expect(best.state().loading).toBeTruthy();
        });
        it('Bestsellers state "error" is false', () => {
            expect(best.state().error).toBeFalsy();
        });
        it('Bestsellers state "typeError" is string', () => {
            expect(best.state().typeError).toBeString();
        });
        it('Bestsellers state "fatalError" is false', () => {
            expect(best.state().fatalError).toBeFalsy();
        });
    });
    describe('Handlers tests', () => {
        it('Testing onError', () => {
            best.instance().onError(<ErrorMessage typeError='404'/>);
            expect(best.state().error).toBeTruthy();
            expect(best.state().loading).toBeFalsy();
        });
    });
});