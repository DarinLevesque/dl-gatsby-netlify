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
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link to="/about" className="navbar-item is-active">
              <i className="fas fa-user"/>{" "}
              About
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
              <div className="navbar-dropdown">
                <Link to="/blog/professional" className="navbar-item">
                  <i className="fas fa-fighter-jet"/>{" "}
                  Professional
                </Link>
                <Link to="/blog/family" className="navbar-item">
                  <i className="fas fa-users"/>{" "}Family
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <Link to="/resume" className="navbar-link">
                Resume
              </Link>
              <div className="navbar-dropdown">
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
                  <i className="fas fa-download"/>{" "}Download
                </Link>
              </div>
            </div>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </Headroom>
  )
}

export default Header;