import React, { Component } from 'react'
import './Footer.css';


export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <footer>
                <h1>Connect</h1> <br/>
                <div className="container">
                <div className="row">
                <div className="col-3">
                <a href="#" target="_blank"><img src="/images/facebook.png" alt="" width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#" target="_blank" ><img src="/images/instagram.png" alt="" width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#" target="_blank" ><img src="/images/twitter.png" alt="" width="45px" height="45px"/></a>
                </div>
                <div className="col-3">
                <a href="#"><img src="/images/pinterest.png"  alt="" width="45px" height="45px"/></a> 
                </div>
                </div><br></br>
                <div className="row justify-content-center">
                <img src="./images/license.png" alt="" width="20px" height="20px" />
                <p>2020 TVMaze LLC All rights reserved.</p>
                </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
