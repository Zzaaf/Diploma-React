import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';
import Spinner from '../spinner';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

export default class CoffeeItem extends Component {
    coffeeService = new CoffeeService();
    state = {
        post: [],
        loading: false
    }
    componentDidMount() {
        this.setState({loading: true});
        this.coffeeService.getAllCoffee()
        .then(this.onCoffeeLoaded);
    }
    onCoffeeLoaded = (posts) => {
        let checkName = this.props.coffeeName;
        for ( let i = 0; i < posts.length; i++) {
            if ( checkName === posts[i].name.replace(/ /g, "-")) {
                let newPost = posts[i];
                this.setState({post: 
                    <Row>
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={newPost.url} alt="coffee_item"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">{newPost.name}</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="shop__point">
                                <span>Country: </span>
                                {newPost.country}
                            </div>
                            <div className="shop__point">
                                <span>Description: </span>
                                {newPost.description}
                            </div>
                            <div className="shop__point">
                                <span>Price: </span>
                                <span className="shop__point-price">{newPost.price}</span>
                            </div>
                        </div>
                    </Row>
                });
                break;
            } else {
                this.setState({post:
                    <Container>
                        <Row>
                            <div className="col-lg-12">
                                <p className="no-item">There's no such an item.</p>
                            </div>
                        </Row>
                    </Container>
                });
            }
        }
        setTimeout(() => {
            this.setState({loading: false});
        }, 500)
    }

    render() {
        if (this.state.loading === true) {
            return (
                <Container>
                    <Row>
                        <Spinner/>
                    </Row>
                </Container>
            )
        } else {
            return (
                <section className="shop">
                    <Container>
                        <Row>
                            {this.state.post}
                        </Row>
                    </Container>
                </section>
            )
        }
    }
}