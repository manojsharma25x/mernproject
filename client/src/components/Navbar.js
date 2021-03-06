import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return <div>

<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Logo</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="#">About</Link>
      </li> */}

    </ul>
  </div>
</nav>

  </div>;
};

export default Navbar;
