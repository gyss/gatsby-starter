import React from 'react'

import Layout from '../components/Layout'
import HelmetConfig from '../components/HelmetConfig'

const Index = ({ location }) => (
  <>
    <HelmetConfig page={location.pathname} title="Home" />
    <Layout location={location}>
      <div className="container">
        <h1>Gatsby Starter</h1>
      </div>
    </Layout>
  </>
)

export default Index
