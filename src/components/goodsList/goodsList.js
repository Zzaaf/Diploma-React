import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';


export default class GoodsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
            error: false,
            fatalError: false,
            typeError: ''
        };
    }
    coffeeService = new CoffeeService();

    componentDidMount() {
        this.coffeeService.getAllGoods()
            .then(this.onGoodsLoaded);
    }

    onGoodsLoaded = (posts) => {
        let newPosts = posts.map((post, index) => {
            return (
                <div key={index} className="shop__item">
                    <img src={post.url} alt="coffee"></img>
                    <div className="shop__item-title">
                        {post.name}
                    </div>
                    <div className="shop__item-price">{post.price}</div>
                </div>
            )
        });
        this.setState({posts: newPosts});
    }

    render() {
        return (
            <Row>
                <div className="col-lg-10 offset-lg-1">
                    <div className="shop__wrapper">
                        {this.state.posts}
                    </div>
                </div>                        
            </Row>
        );
    }
}

