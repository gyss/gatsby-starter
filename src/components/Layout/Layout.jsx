import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import classnames from 'classnames'

import { itemListDocs, findRootParent } from '../../common/models/item-list'
import Header from '../Header'
import Sidebar from '../Sidebar'

import '../../styles/main.scss'

const Layout = ({ children, location }) => {
  let slug = ''
  let documents = null
  if (location) {
    slug = location.pathname
      .replace(/\/$/, '')
      .replace(process.env.GATSBY_PATH_PREFIX, '')
    documents = findRootParent(itemListDocs, slug)
  }
  const hasItems = documents ? !!documents.items : false

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <>{children}</>}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
