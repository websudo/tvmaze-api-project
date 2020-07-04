import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import axios from 'axios';
import Trending from './Components/Trending'
import Trendstate from './Components/Trendstate'
import Popularstate from './Components/Popularstate'
import Animestate from './Components/Animestate'
import Search from './Components/Search'
import Result from './Components/Result'

class App extends React.Component {

  state = {
    link : []
  }


  componentDidMount(){
    this.config = {
        headers: { "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
                    "x-rapidapi-key": "8ab030f737mshc395b583794af0fp1786cdjsn2ea1758f4eb1"},
      };

    axios.get('https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=Dark', this.config)
      .then((response) => {
            this.setState({
                link : response.data
            })
        });

    }

    // result = (query) =>{
    //   this.setState({
    //     link : query
    //   })
    // } 


  render(){
    return (
      <div className="App">
        <Header />
        <Carousel list = {this.state.link}/>
        {/* <Search /> */}
        <Result />
        <Trendstate />
        <Popularstate />
        <Animestate />
        <Footer />
      </div>
    );
  }
}

export default App;
