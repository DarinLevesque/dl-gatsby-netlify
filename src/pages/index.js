import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Script from "react-load-script";
const isBrowser = typeof window !== "undefined";
const TypeIt = isBrowser ? require("typeit") : undefined;
import graphql from "graphql";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { typed } = new TypeIt("#typed", {
      speed: 50,
      autoStart: false
    })
      .type("Wll")
      .pause(500)
      .delete(2)
      .type("ell, ")
      .pause(1000)
      .type("I guess I'm typing..")
      .break()
      .pause(750)
      .type(" but I don't really know what to say")
      .options({ speed: 700 })
      .type("...")
      .pause(750)
      .options({ speed: 50 })
      .delete()
      .type("IS THAT SO <strong>WRONG??</strong>");

    return (
      <section className="section">
        <p id="typed" />
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.frontmatter.path}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
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
