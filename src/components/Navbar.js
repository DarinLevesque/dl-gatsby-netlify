import React from 'react';
import Link from 'gatsby-link';
import { pushRotate as Menu } from 'react-burger-menu';

import github from '../img/github-icon.svg';
import logo from '../img/DarinLWEBP.webp';

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Navbar = () => (
  <div>
  <Menu styles={ styles } pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
    <Link id="home" className="menu-item" to="/">Home</Link>
    <Link id="about" className="menu-item" to="/about">About</Link>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    
  </Menu>
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Darin Levesque" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/experience">
          Experience
        </Link>
        <Link className="navbar-item" to="/education">
          Education
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://github.com/DarinLevesque/dl-gatsby-netlify" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
  </div>
);

export default Navbar;
