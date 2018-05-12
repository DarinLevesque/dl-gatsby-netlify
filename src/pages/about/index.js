import React from "react";

import MarineLogo from "../../img/MarineCorpsLogo.jpg";

const About = () => {
  return (
    <section className="section">
      <div className="timeline is-centered">
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Start</span>
        </header>
        <div className="timeline-item is-primary">
          <div className="timeline-marker is-primary" />
          <div className="timeline-content">
            <p className="heading">January 2004</p>
            <p>Entered Marines</p>
          </div>
        </div>
        <div className="timeline-item is-warning">
          <div className="timeline-marker is-warning is-image is-32x32">
            <figure className="image is-16x16">
              <img src={MarineLogo} />
            </figure>
          </div>
          <div className="timeline-content">
            <p className="heading">February 2016</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2016</span>
        </header>
        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger is-icon">
            <i className="fas fa-flag" />
          </div>
          <div className="timeline-content">
            <p className="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">Present</span>
        </header>
      </div>
    </section>
  );
};

export default About;
