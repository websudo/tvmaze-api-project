import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {

    state = {
        item : ''
    }

    handleChange = (e) =>{
        this.setState({
            item : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.result(this.state);
    }

    render() {
        return (
            <div className="searchbar">
            <form onSubmit={this.handleSubmit}>
            <div className="container">
            <div className="input-group mb-3">
            <input onChange={this.handleChange} type="text" className="form-control form-control-lg ttdo-input" placeholder="Search Shows" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
            <button className="btn btn-secondary ttdo-btn btn-lg" type="submit" id="button-addon2">Search</button>
            </div>
            </div>
            </div>
            </form>
            </div>
        )
    }
}

export default Search
