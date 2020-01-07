import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actSearch } from './../actions'

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
           strSearch: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch() {
        this.props.goSearch(this.state.strSearch);
    }

    handleClear() {
        this.setState({
            strSearch: ''
        })
        this.props.goSearch(this.state.strSearch);
    }

    handleChange(event) {
        this.setState({
            strSearch: event.target.value
        })
    }

    render() {
        let strSearch = (this.state.strSearch) ? this.state.strSearch  : this.props.search;
        return (
            <div className="col-12">
                <div className="input-group">
                <input value={ strSearch } onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-append">
                    <button onClick={this.handleSearch} className="btn btn-info" type="button">Go!</button>
                    <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear!</button>
                </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        search: state.search
    }
  }

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        goSearch: (search) => {
            dispatch(actSearch(search));
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Search);
