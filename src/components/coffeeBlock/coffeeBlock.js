import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';
import CoffeeList from '../coffeeList';

export default class CoffeeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            term: '',
            filter: '',
            loading: true,
            error: false,
            fatalError: false,
            typeError: ''
        };
        this.buttons = ['Brazil', 'Kenya', 'Columbia'];
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    coffeeService = new CoffeeService();

    componentDidMount() {
        this.coffeeService.getAllCoffee()
            .then(this.onCoffeeLoaded);
    }
    searchPosts(items, term) {
        if (term.length === 0 ) {
            return items
        }
        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        });
    }
    filterPost(items, filter) {
        if ( filter !== '') {
            return items.filter((item) => {
                return item.country === filter
            })
        } else {
            return items
        }
    }
    onUpdateSearch(event) {
        const term = event.target.value;
        this.setState({term: term});
    }
    onFilterSelect(filter) {
        if (this.state.filter === filter) {
            this.setState({filter: ''});
        } else {
            this.setState({filter: filter});
        }
    }
    onCoffeeLoaded = (posts) => {
        this.setState({posts: posts});
    }

    render() {
        const buttons = this.buttons.map((label, index) => {
            const {filter} = this.state;
            const active = filter === label;
            const activeClass = active ? ' shop__filter-btn_active' : '';
            return (
                <button
                    key={index}
                    className={`shop__filter-btn${activeClass}`}
                    onClick={() => this.onFilterSelect(label)}
                    >{label}</button>
            )
            });
            const {posts, term, filter} = this.state;
            const visiblePosts = this.filterPost(this.searchPosts(posts, term), filter);

        return (
            <>
                <Row>
                    <div className="col-lg-4 offset-2">
                        <form action="#" className="shop__search">
                            <label className="shop__search-label" htmlFor="filter">Looking for</label>
                            <input
                                id="filter"
                                type="text"
                                placeholder="start typing here..."
                                className="shop__search-input"
                                onChange={this.onUpdateSearch}
                                ></input>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="shop__filter">
                            <div className="shop__filter-label">
                                Or filter
                            </div>
                            <div className="shop__filter-group">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </Row>
                <CoffeeList
                    onCoffeeSelected={(name) => 
                        this.props.onCoffeeSelected(name)}
                    posts={visiblePosts}/>
            </>
        );
    }
}

