import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  // ✅ State for menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Function to toggle menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">{props.title}</a>

      {/* ✅ Toggle Button using React method */}
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* ✅ Conditional class "show" based on state */}
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">{props.Home} <span className="sr-only">Home</span></Link>
          </li>
  
          <li className="nav-item">
  <Link className="nav-link" to="/about">About</Link>
</li>

        </ul>

        {/* ✅ Dark/Light mode switch */}
          <div className={`form-check form-switch text-end text-${props.mode === 'light' ? "dark" : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.mode}</label>
          </div>
      </div>
    </nav>
  );
}