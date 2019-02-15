import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainPage, CoffeePage, PleasurePage, CoffeeHeader} from '../pages';
import CoffeeItem from '../coffeeItem';
import Footer from '../footer';
import CoffeeService from '../../services/coffeeService';
import ErrorMessage from '../errorMessage';

import '../../sass/style.sass';

export default class App extends Component {
    coffeeService = new CoffeeService();
    state = {
        typeError: '',
        fatalError: false
    }
    componentDidCatch() {
        console.log('fatal');
        this.setState({
            fatalError: true,
            typeError: 'fatal'
        })
    }

    render() {
        const { typeError } = this.state;
        if(this.state.fatalError) {
            return <Container><Row><ErrorMessage typeError={typeError}/></Row></Container>
        }
        return (
            <Router>
                <> 
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/coffee' component={CoffeeHeader}/>
                    <Route path='/bestsellers' component={CoffeeHeader}/>
                    <Route path='/coffee' exact component={CoffeePage}/>
                    <Route path='/pleasure' exact component={PleasurePage}/>
                    <Route path='/coffee/:id' render={
                                ({match}) => {
                                    const {id} = match.params;
                                    return <CoffeeItem
                                        getData={this.coffeeService.getAllCoffee}
                                        coffeeName={id}/>}
                                }/>
                    <Footer/>
                </>
            </Router>
        );
    }
};

