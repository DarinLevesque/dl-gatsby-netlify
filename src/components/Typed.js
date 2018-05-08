import React from "react";
const isBrowser = typeof window !== "undefined";
const TypeIt = isBrowser ? require("typeit") : undefined;
// import TypeIt from "typeit";

class Typed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new TypeIt(this.el, this.props);
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Typed;
