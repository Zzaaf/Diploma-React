import React, {Component} from 'react';
import {Row} from 'reactstrap';
import Spinner from '../spinner';

export default class CoffeeList extends Component {
    state = {
        posts: [],
        loading: false
    }
    componentDidUpdate(prevProps) {
        if(this.props.posts !== prevProps.posts) {
            this.setState({loading: true});
            this.updateList(this.props.posts);
        }
    }
    updateList = (list) => {
        let newPosts = list.map((post, index) => {
            return (
                <div
                key={index}
                className="shop__item"
                onClick={() => this.props.onCoffeeSelected(post.name)}
                >
                    <img src={post.url} alt="coffee"></img>
                    <div className="shop__item-title">
                        {post.name}
                    </div>
                    <div className="shop__item-country">{post.country}</div>
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
                        <div className="shop__wrapper">
                            {this.state.posts}
                        </div>
                    </div>                        
                </Row>
            )
        }
    }
}
