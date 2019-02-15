import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

import BeansLogoDark from '../../logo/Beans_logo_dark.svg';

export default class CoffeeItem extends Component {
    state = {
        post: [],
        loading: true,
        error: false,
        typeError: '',
        fatalError: false
    }
    componentDidCatch() {
        this.setState({
            fatalError: true,
            typeError: 'fatal'
        })
    }
    componentDidMount() {
        this.setState({loading: true});
        const {getData} = this.props;
        getData()
        .then(this.onCoffeeLoaded)
        .catch(this.onError);
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            typeError: err.message
        });
    }
    onCoffeeLoaded = (posts) => {
        let checkName = this.props.coffeeName;
        for ( let i = 0; i < posts.length; i++) {
            if ( checkName === posts[i].name.replace(/ /g, "-")) {
                let newPost = posts[i],
                    {url, name, country = "China", description = "Unfortunately there's no description for this item"} = posts[i];
                this.setState({post: 
                    <Row>
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={url} alt="coffee_item"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">{name}</div>
                            <img className="beanslogo" src={BeansLogoDark} alt="Beans logo"></img>
                            <div className="shop__point">
                                <span>Country: </span>
                                {country}
                            </div>
                            <div className="shop__point">
                                <span>Description: </span>
                                {description}
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
        const { post, loading, error, typeError } = this.state;
        if(this.state.fatalError) {
            return <Container><Row><ErrorMessage typeError={typeError}/></Row></Container>
        }
        const content = !(loading || error) ? <>{post}</> : null;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage typeError={typeError}/> : null;
        return (
            <section className="shop">
                <Container>
                    <Row>
                        {content}
                        {spinner}
                        {errorMessage}
                    </Row>
                </Container>
            </section>
        )
    }
}