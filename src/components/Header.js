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
            <img src={logo} alt="Darin Levesque Logo" width="112" height="50" />
          </Link>
        </div>
      </nav>
    </Headroom>
  );
};

export default Header;
