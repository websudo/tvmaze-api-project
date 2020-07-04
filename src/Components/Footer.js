import React, { Component } from 'react'
import './Footer.css';
import flogo from '../images/facebook.png'
import ilogo from '../images/instagram.png'
import tlogo from '../images/twitter.png'
import plogo from '../images/pinterest.png'
import llogo from '../images/license.png'



export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer>
                <h1>Connect</h1> <br/>
                <div className="container">
                <div className="row">
                <div className="col-3">
                <a href="#" target="_blank"><img src={flogo} alt="..." width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#" target="_blank" ><img src={ilogo} alt="..." width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#" target="_blank" ><img src={tlogo} alt="...." width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#"><img src={plogo}  alt="..." width="45px" height="45px"/></a> 
                </div>
                </div><br></br>
                <div className="row justify-content-center">
                <img src={llogo} alt="..." width="20px" height="20px" />
                <p>2020 TVMaze LLC All rights reserved.</p>
                </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
