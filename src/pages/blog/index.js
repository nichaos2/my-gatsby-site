import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'


const BlogPage = ({ data }) => {
  return (

    <Layout pageTitle="My Blog Posts">

      <p>My cool posts will go in here</p>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.name}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                </h2>
              <p>Posted: {node.frontmatter.date}</p>

            </article>
          ))
        }
      </ul>

    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM DD, YYYY - HH:MM")
        title
      }
      id
      slug
    }
  }
}
`


export default BlogPage