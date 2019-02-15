import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Header from '../header';
import Bestsellers from '../bestsellers';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import ErrorMessage from '../errorMessage';

import BeansLogo from '../../logo/Beans_logo.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

class MainPage extends Component {
    state = {
        fatalError: false,
        typeError: ''
    }
    componentDidCatch() {
        this.setState({
            fatalError: true,
            typeError: 'fatal'
        })
    }

    render() {
        const { typeError } = this.state;
        if(this.state.fatalError) {
            return <Row><ErrorMessage typeError={typeError}/></Row>
        }
        return (
            <>
                <div className="preview">
                    <Container>
                        <Header/>
                        <Row>
                            <div className="col-lg-10 offset-lg-1">
                                <h1 className="title-big">Everything You Love About Coffee</h1>
                                <img className="beanslogo" src={BeansLogo} alt="Beans logo"></img>
                                <div className="preview__subtitle">We makes every day full of energy and taste</div>
                                <div className="preview__subtitle">Want to try our beans?</div>
                                <Link className="preview__btn" to='/coffee/'>More</Link>
                            </div>
                        </Row>
                    </Container>
                </div>
                <section className="about">
                    <Container>
                        <Row>
                            <div className="col-lg-6 offset-lg-3">
                                <div className="title">About Us</div>
                                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                                <div className="about__text">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.<br></br>
    
                                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                    horrible but confined day end marriage. Eagerness furniture set preserved far
                                    recommend. Did even but nor are most gave hope. Secure active living depend son
                                    repair day ladies now.
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>
                <section className="best">
                    <Container>
                        <div className="title">Our best</div>
                        <Bestsellers
                            onCoffeeSelected={(name) => {
                                this.props.history.push({
                                    pathname: `/bestsellers/${name.replace(/ /g, "-")}`
                                })
                            }}/>
                    </Container>
                </section>
            </>
        );
    }
};

export default withRouter(MainPage);
