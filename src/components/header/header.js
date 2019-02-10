import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col lg="6">
                    <header>
                        <ul class="header">
                            <li class="header__item">
                                <Link to='/'>
                                    <img src="img/Logo.svg" alt="logo" />>
                                </Link>
                            </li>
                            <li class="header__item">
                                <Link to='/'>Our coffee</Link>
                            </li>
                            <li class="header__item">
                                <Link to='/'>For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;