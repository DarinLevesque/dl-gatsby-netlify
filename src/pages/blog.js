import React from "react";
import PropTypes from 'prop-types';
import Link from "gatsby-link";
import graphql from "graphql";

export default class BlogPage extends React.Component {
  render() {
    const {data} = this.props;
    const {edges: posts} = data.allMarkdownRemark;

    return (
      <section className="section">
        <p id="example4"/>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === "blog-post")
            .map(({node: post}) => (
              <section className="section" key={post.id}>
                <div className="card">
                  <div className="card-image">
                    <figure className="is-64x64"/>
                  </div>
                  <header className="card-header">
                    <p className="card-header-title">
                      <Link className="has-text-primary" to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                      <small className="card-header-icon">
                        {post.frontmatter.date}
                      </small>
                    </p>
                  </header>
                  <div className="card-content">
                    <p>{post.excerpt}</p>
                  </div>
                  <footer className="card-footer">
                    <div className="card-footer-item">
                      <Link className="button" to={post.frontmatter.path}>
                        Keep Reading →
                      </Link>
                    </div>
                  </footer>
                </div>
              </section>
            ))}
        </div>
      </section>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({edges: PropTypes.array})
  })
}

export const pageQuery = graphql `
  query BlogQuery {
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
