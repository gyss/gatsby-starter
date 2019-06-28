import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HelmetConfig from '../components/HelmetConfig'

export default ({ data, location }) => {
  const page = data.markdownRemark || {}
  const title =
    page.headings && page.headings[0] ? page.headings[0].value : 'Docs'
  return (
    <>
      <HelmetConfig page={location.pathname} title={title} />
      <Layout location={location}>
        <div className="document">
          <main className="main">
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </main>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      headings(depth: h1) {
        value
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
