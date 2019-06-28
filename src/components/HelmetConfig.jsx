import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { siteMetadata } from '../../gatsby-config'

const HelmetConfig = ({ title, page }) => {
  const finalTitle = `${title} | ${get(siteMetadata, 'title')}`

  const meta = []

  return <Helmet title={finalTitle} meta={meta} />
}
export default HelmetConfig
