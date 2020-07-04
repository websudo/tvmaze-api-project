import React, { Component } from 'react'
import axios from 'axios';
import Trending from './Trending';
import './Trending.css'

export class Trendstate extends Component {

    state = {
        link :[]
    }

    componentDidMount(){

        this.config = {
            headers: { "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
                        "x-rapidapi-key": "8ab030f737mshc395b583794af0fp1786cdjsn2ea1758f4eb1"},
          };
    
        axios.get('https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=Friends', this.config)
          .then((response) => {
                this.setState({
                    link : response.data
                })
            });
      }


    render() {
        return (
            <div className="backtrend">
                <h1 className="trendtitle">Trending Shows</h1>
                <Trending props ={this.state.link}/>
            </div>
        )
    }
}

export default Trendstate
