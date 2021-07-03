import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">[ Country App ]</Link>
                            <ul className="navbar-nav left">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
