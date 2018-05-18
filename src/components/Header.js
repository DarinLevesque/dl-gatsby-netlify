import React from "react";
import Link from "gatsby-link";
import Headroom from "react-headroom";

import logo from "../img/DarinLWEBP.webp";

const Header = () => {
  return (
    <Headroom>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="Darin Levesque Logo" width="112" height="50"/>
          </Link>
        </div>
        <div className="navbar-menu">
          <Link to="/about" className="navbar-item is-active">
            About
          </Link>
          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/resume" className="navbar-link">
              Resume
            </Link>
            <div className="navbar-dropdown ">
              <Link to="/resume/experience" className="navbar-item">
                Experience
              </Link>
              <Link to="/resume/education" className="navbar-item">
                Education
              </Link>
              <Link to="/resume/skills" className="navbar-item">
                Skills
              </Link>
              <hr className="navbar-divider"/>
              <Link to="/timeline" className="navbar-item">
                Timeline
              </Link>
            </div>
          </div>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>
      </nav>
    </Headroom>
  );
};

export default Header;
