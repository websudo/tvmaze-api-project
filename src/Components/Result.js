import React, { Component } from 'react'
import Search from './Search'
import Resultprint from './Resultprint'
import axios from 'axios';

export class Result extends Component {

    state = {
        item : []
    }

    
    result = (query)=>{

    
        this.config = {
            headers: { "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
                        "x-rapidapi-key": "8ab030f737mshc395b583794af0fp1786cdjsn2ea1758f4eb1"},
          };
    
        axios.get(`https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=${query.item}`, this.config)
          .then((response) => {
              
                this.setState({
                    item : response.data
                })
            });
    }

    
    render() {
        return (
            <div>
                <Search result ={this.result}/>
                <Resultprint query = {this.state}/>
            </div>
        )
    }
}

export default Result
