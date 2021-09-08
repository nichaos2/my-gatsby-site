import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    
      <p>Welcome to my page.</p>
      
      <StaticImage
        alt="nioannou-coperbien"
        src="../images/Nikos-coperbien.jpg"
      />
    
    </Layout>
  )
}

export default IndexPage
