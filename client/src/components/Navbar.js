import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

export default function Navbar(props) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toggleText, setToggleText] = useState('Enable Dark Mode');

  const toggleMode1 = () => {
    setIsDarkMode(!isDarkMode);
    setToggleText(isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode');
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.abouttext}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input
              className="form-check-input mx-1"
              onClick={props.toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label ${isDarkMode ? 'color-black' : ''}`}
              onClick={toggleMode1}
              htmlFor="flexSwitchCheckDefault"
            >
              {toggleText}
            </label>
          </div>
          
          <Link to="/register" className="btn btn-primary mx-2">Sign Up</Link>
           <Link to="/login" className="btn btn-secondary ">Sign In</Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set Title',
  abouttext: 'About Text',
};
