import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class GoodsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
            error: false,
            typeError: '',
            fatalError: false
        };
    }
    coffeeService = new CoffeeService();
    componentDidCatch() {
        console.log('fatal');
        this.setState({
            fatalError: true,
            typeError: 'fatal'
        })
    }
    componentDidMount() {
        this.setState({loading: true});
        this.coffeeService.getAllGoods()
            .then(this.onGoodsLoaded)
            .catch(this.onError);
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
            typeError: err.message
        });
    }
    onGoodsLoaded = (posts) => {
        let newPosts = posts.map((post, index) => {
            // this.foo.bar = 0;
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
        setTimeout(() => {
            this.setState({loading: false});
        }, 300)
    }

    render() {
        const { posts, loading, error, typeError } = this.state;
        if(this.state.fatalError) {
            return <Row><ErrorMessage typeError={typeError}/></Row>
        }
        const content = !(loading || error) ? 
        <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
                {posts}
            </div>
        </div> : null;
        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage typeError={typeError}/> : null;
        return (
            <Row>
                {content}
                {spinner}
                {errorMessage}
            </Row>
        )
    }
}

