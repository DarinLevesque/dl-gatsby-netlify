import React from "react";
import Link from "gatsby-link";
import { pushRotate as Menu } from "react-burger-menu";

import github from "../img/github-icon.svg";
import logo from "../img/DarinLWEBP.webp";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "20px",
    right: "20px",
    top: "20px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div>
        <Menu
          styles={styles}
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          right
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link
            id="home"
            className="menu-item"
            to="/"
            onClick={() => this.closeMenu()}
          >
            Home
          </Link>
          <Link
            id="blog"
            className="menu-item"
            to="/blog"
            onClick={() => this.closeMenu()}
          >
            Blog
          </Link>
          <Link
            id="about"
            className="menu-item"
            to="/about"
            onClick={() => this.closeMenu()}
          >
            About
          </Link>
          <a
            id="contact"
            className="menu-item"
            href="/contact"
            onClick={() => this.closeMenu()}
          >
            Contact
          </a>
          <aside className="menu">
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Customers</a>
              </li>
            </ul>
            <p className="menu-label">Administration</p>
            <ul className="menu-list">
              <li>
                <a>Team Settings</a>
              </li>
              <li>
                <a className="is-active">Manage Your Team</a>
                <ul>
                  <li>
                    <a>Members</a>
                  </li>
                  <li>
                    <a>Plugins</a>
                  </li>
                  <li>
                    <a>Add a member</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Invitations</a>
              </li>
              <li>
                <a>Cloud Storage Environment Settings</a>
              </li>
              <li>
                <a>Authentication</a>
              </li>
            </ul>
            <p className="menu-label">Transactions</p>
            <ul className="menu-list">
              <li>
                <a>Payments</a>
              </li>
              <li>
                <a>Transfers</a>
              </li>
              <li>
                <a>Balance</a>
              </li>
            </ul>
          </aside>
        </Menu>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src={logo}
                alt="Darin Levesque Logo"
                width="112"
                height="50"
              />
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
