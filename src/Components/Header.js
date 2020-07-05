import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                <a className="navbar-brand mb-0 h1" href="#">TVMania</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#popular">Popular</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Subscribe</a>
                        </li>
                        
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

export default Header
