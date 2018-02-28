import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SOCKS Console</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/sessions'>Sessions</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/authentication'>Authentication</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;