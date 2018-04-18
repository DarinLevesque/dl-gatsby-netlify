import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import TypeIt from "typeit";

export default class IndexPage extends React.Component {
  render() {
    const instance = new TypeIt("#typed", {
      strings: ["This is a great string.", "But here is a better one."],
      speed: 50,
      breakLines: false,
      autoStart: false
    });

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          <p id="typed" />
        </div>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
