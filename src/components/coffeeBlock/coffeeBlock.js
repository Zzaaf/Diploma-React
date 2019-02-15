import React, {Component} from 'react';
import {Row} from 'reactstrap';
import CoffeeService from '../../services/coffeeService';
import CoffeeList from '../coffeeList';
import ErrorMessage from '../errorMessage';

export default class CoffeeBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            term: '',
            filter: '',
            error: false,
            typeError: '',
            fatalError: false
        };
        this.buttons = ['Brazil', 'Kenya', 'Columbia'];
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    coffeeService = new CoffeeService();
    componentDidCatch() {
        this.setState({
            fatalError: true,
            typeError: 'fatal'
        })
    }
    componentDidMount() {
        this.coffeeService.getAllCoffee()
            .then(this.onCoffeeLoaded)
            .catch(this.onError);
    }
    onError = (err) => {
        this.setState({
            error: true,
            typeError: err.message
        });
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
        const { posts, term, filter, error, typeError } = this.state;
        if(this.state.fatalError) {
            return <Row><ErrorMessage typeError={typeError}/></Row>
        }
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
            const visiblePosts = this.filterPost(this.searchPosts(posts, term), filter);
            const content = error ? <Row><ErrorMessage typeError={typeError}/></Row> : 
                <CoffeeList
                    onCoffeeSelected={(name) => 
                    this.props.onCoffeeSelected(name)}
                    posts={visiblePosts}/>;
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
                {content}
            </>
        );
    }
}

