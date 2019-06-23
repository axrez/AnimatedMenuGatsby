import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the homepage</p>
    <p>Click the menu button to go to another page</p>
  </Layout>
)

export default IndexPage
