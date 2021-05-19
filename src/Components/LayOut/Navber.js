import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
        <h3 className="p-2 fw-bold ">React-CURD</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
            <NavLink className="nav-link fs-4 fw-bold" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fs-4 fw-bold" exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link fs-4 fw-bold" exact to="/contact">Contact</NavLink>
            </li>

    </ul>
    </div>
    <Link className="nav-link fw-bold btn btn-dark ms-4" to="/users/add" >Add User</Link>
    </div>
    </nav>
    );
};

export default Navber;