import React from 'react';
import {Container} from 'reactstrap';
import Header from '../header';

const CoffeeHeader = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <Header/>
                    <h1 className="title-big">Our Coffee</h1>
                </Container>
            </div>
        </>
    );
};

export default CoffeeHeader;