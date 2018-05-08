import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Typed from "../components/Typed";
// const isBrowser = typeof window !== "undefined";
// const TypeIt = isBrowser ? require("typeit") : undefined;

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">My Background</h1>
              <h2 className="subtitle">
                <Typed
                  strings={[
                    "Hi, my name is Darin.",
                    "I'm a Test Resource Manager for NAVAIR"
                  ]}
                  startDelay={2500}
                  nextStringDelay={[2500, 2000]}
                  lifeLike={true}
                  cursorChar="_"
                  breakLines={false}
                  autoStart={false}
                />
              </h2>
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
                    I've been working in high-demand aviation environments since
                    2004. My journey started as a CH-46 Seaknight (Phrog) Crew
                    Chief then transtioned to the V-22 Osprey in 2006 and
                    decided to entere civilian service in 2014.
                  </p>
                  <p>
                    In my ten years on active duty in the Marine Corps I
                    achieved the following:
                  </p>
                  <ul>
                    <li>Weapons and Tactics Instructor</li>
                    <li>Night Systems Instructor</li>
                    <li>Crew Resource Management Instructor</li>
                    <li>
                      Naval Air Training & Operating Procedures Standardization
                      Instructor
                    </li>
                    <li>Collateral Duty Inspector</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Title</p>
                  <p className="subtitle">smaller title</p>
                  <div className="content">
                    <p>And words th make them all say things</p>
                  </div>
                </article>
              </div>
              <div className="tile is-parent is-8">
                <article className="tile is-child box">
                  <p className="title">Title</p>
                  <p className="subtitle">smaller title</p>
                  <div className="content">
                    <p>And words th make them all say things</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
