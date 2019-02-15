import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import CoffeeBlock from '../coffeeBlock';
import {withRouter} from 'react-router-dom';
import ErrorMessage from '../errorMessage';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';
import CoffeeGirl from '../../img/coffee_girl.jpg';

class CoffeePage extends Component {
    state = {
        fatalError: false 
    }
    componentDidCatch() {
        this.setState({
            fatalError: true
        })
    }
    render() {
        const { typeError } = this.state;
        if(this.state.fatalError) {
            return <Row><ErrorMessage typeError={typeError}/></Row>
        }
        return (
            <section className="shop">
                <Container>
                    <Row>
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={CoffeeGirl} alt="girl"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br></br>
                                <br></br>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br></br>
                                so questions. <br></br>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br></br>
                                is song that held help face.
                            </div>
                        </div>
                    </Row>
                    <div className="line"></div>
                    <CoffeeBlock
                        onCoffeeSelected={(name) => {
                            this.props.history.push({
                                pathname: name.replace(/ /g, "-")
                            })
                        }}/>
                </Container>
            </section>
        );
    }
};

export default withRouter(CoffeePage);