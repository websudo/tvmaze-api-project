import React, { Component } from 'react'
import axios from 'axios';
import Anime from './Anime'


export class Animestate extends Component {

    state = {
        link :[]
    }

    componentDidMount(){

        this.config = {
            headers: { "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
                        "x-rapidapi-key": "8ab030f737mshc395b583794af0fp1786cdjsn2ea1758f4eb1"},
          };
    
        axios.get('https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=Dragon Ball', this.config)
          .then((response) => {
                this.setState({
                    link : response.data
                })
            });
      }


    render() {
        
        return (
            <div className="backtrend">
                <h1 className="trendtitle">Popular Anime Shows</h1>
                <Anime props ={this.state.link}/>
            </div>
        )
    }
}

export default Animestate