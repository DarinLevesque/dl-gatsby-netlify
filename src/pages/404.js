import React from "react";
import Typed from "../components/Typed";

const NotFoundPage = () => (
  <div>
    <section className="hero is-large is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">NOT FOUND</h1>
          <h2 className="subtitle">
            You just hit a route that doesn&#39;t exist...
            <Typed strings="the sadness is real." />
          </h2>
        </div>
      </div>
    </section>
  </div>
);

export default NotFoundPage;
