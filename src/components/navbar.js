import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
            </li>
        </ul>
    )
}

export default withRouter(Navbar);