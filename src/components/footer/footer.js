import React from 'react';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

import LogoBlack from '../../logo/Logo_black.svg';
import BeansLogoDark from '../../logo/Beans_logo_dark.svg';


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to='/'>
                                        <img src={LogoBlack} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/coffee/'>Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to='/pleasure/'>For your pleasure</Link>
                            </li>
                        </ul>
                    </div>
                </Row>
                <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
            </Container>
        </footer>
    );
};

export default Footer;