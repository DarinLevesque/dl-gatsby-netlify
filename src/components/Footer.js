import React from "react";
import Link from "gatsby-link";
import {OutboundLink} from "gatsby-plugin-google-analytics";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://facebook.com/darinlevesque">
                  <i className="fab fa-lg fa-facebook"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.twitter.com/darinlevesque">
                  <i className="fab fa-lg fa-twitter"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://www.linkedin.com/in/darinlevesque/">
                  <i className="fab fa-lg fa-linkedin"/>
                </OutboundLink>
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <OutboundLink href="https://github.com/DarinLevesque">
                  <i className="fab fa-lg fa-github"/>
                </OutboundLink>
              </span>
            </div>
          </nav>
          <p>
            <strong>Digital Resume</strong>
            by{" "}
            <Link to="/">Darin Levesque</Link>. The source code is licensed{" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br/>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              <img
                alt="Creative Commons License"
                style={{
                borderWidth: 0
              }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"/>
            </a>
            <br/>This work is licensed under a{" "}
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
