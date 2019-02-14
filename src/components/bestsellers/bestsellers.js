import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';
import Spinner from '../spinner';

export default class Bestsellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
            error: false,
            fatalError: false,
            typeError: ''
        };
    }
    coffeeService = new CoffeeService();

    componentDidMount() {
        this.setState({loading: true});
        this.coffeeService.getAllBestsellers()
            .then(this.onBestLoaded);
    }

    onBestLoaded = (posts) => {
        let newPosts = posts.map((post, index) => {
            return (
                <div
                    key={index}
                    className="best__item">
                    <img src={post.url} alt="coffee"></img>
                    <div className="best__item-title">
                        {post.name}
                    </div>
                    <div className="best__item-price">{post.price}</div>
                </div>
            )
        });
        this.setState({posts: newPosts});
        setTimeout(() => {
            this.setState({loading: false});
        }, 300)
    }

    render() {
        if (this.state.loading === true) {
            return (
                    <Row>
                        <Spinner/>
                    </Row>
            )
        } else {
            return (
                <Row>
                    <div className="col-lg-10 offset-lg-1">
                        <div className="best__wrapper">
                            {this.state.posts}
                        </div>
                    </div>
                </Row>
            );
        }
    }
}

