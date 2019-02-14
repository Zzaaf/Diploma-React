import React from 'react';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Logo from '../../logo/Logo.svg';


const Header = () => {
    return (
        <Row>
            <div className="col-lg-6">
                <header>
                        <ul className="header">
                            <li className="header__item">
                                <Link to='/'>
                                    <img src={Logo} alt="logo"></img>
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to='/coffee/'>Our coffee</Link>
                            </li>
                            <li className="header__item">
                                <Link to='/pleasure/'>For your pleasure</Link>
                            </li>
                        </ul>
                    </header>
            </div>
        </Row>
    );
};

export default Header;