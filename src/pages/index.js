import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Typed from "../components/Typed";
// const isBrowser = typeof window !== "undefined"; const TypeIt = isBrowser ?
// require("typeit") : undefined;

import Profile from "../img/darinprofile.jpg";

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <article className="media columns">
                <figure
                  className="media-left column is-offset-one-quarter is-one-quarter animated fadeInLeftBig">
                  <p className="image is-128x128">
                    <img src={Profile}/>
                  </p>
                </figure>
                <div className="media-content column is-one-half">
                  <h1 className="title">Who am I?</h1>
                  <h2 className="subtitle">
                    <Typed
                      strings={["Hi, my name is Darin.", "I'm a Test Resource Manager for NAVAIR"]}
                      startDelay={2500}
                      nextStringDelay={[2500, 2000]}
                      lifeLike={true}
                      cursorChar="_"
                      breakLines={false}
                      autoStart={false}/>
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns is-mobile is-centered">
                <div className="column is-two-thirds">
                  <h1>Welcome</h1>
                  <p>
                    I've been working in high-demand aviation environments since 2004. {" "}<Link to="/about">My journey</Link>{" "}
                    started as a CH-46 Seaknight (Phrog) Crew Chief after which I transtioned to the
                    V-22 Osprey in 2006 and decided to enter government civilian service in 2014.
                  </p>
                  <p>
                    In my ten years on active duty in the Marine Corps I achieved the following:
                  </p>
                  <ul>
                    <li>Weapons and Tactics Instructor</li>
                    <li>Night Systems Instructor</li>
                    <li>Crew Resource Management Instructor</li>
                    <li>
                      Naval Air Training & Operating Procedures Standardization Instructor
                    </li>
                    <li>Collateral Duty Inspector</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container is-widescreen"></div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                    "Quotes from Twitter"
                  </p>
                  <p className="subtitle">
                    Author
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      View on
                      <a href="https://twitter.com/darinlevesque">Twitter</a>
                    </span>
                  </p>
                  <p className="card-footer-item">
                    Share
                  </p>
                </footer>
              </div>
            </div>
            <div className="column"></div>
            <div className="columns"></div>
          </div>
        </section>
      </div>
    );
  }
}
