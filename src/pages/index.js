import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
const isBrowser = typeof window !== "undefined";
const TypeIt = isBrowser ? require("typeit") : undefined;

const instance = new TypeIt("#typed", {
  strings: ["This is a great string.", "But here is a better one."],
  speed: 40,
  breakLines: false,
  autoStart: false
});

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Background</h1>
          </div>
          <p id="typed" />
        </div>
      </section>
    );
  }
}
