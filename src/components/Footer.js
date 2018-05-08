import React from "react";
import Link from "gatsby-link";

const Footer = () => {
  return (
    <footer className="footer has-background-grey-lighter is-bold">
      <div className="container">
        <div className="content has-text-centered">
          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <i className="fab fa-facebook" />
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <i className="fab fa-twitter" />
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <i className="fab fa-linkedin" />
              </span>
            </div>
            <div className="level-item has-text-centered">
              <span className="icon is-medium">
                <i className="fab fa-github" />
              </span>
            </div>
          </nav>
          <p>
            <strong>Digital Resume</strong> by{" "}
            <a href="https://darinlevesque.com">Darin Levesque</a>. The source
            code is licensed{" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.<br />
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
              />
            </a>
            <br />This work is licensed under a{" "}
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
