import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
           
            <p>Hi there! I go by the name Nikos and I built this page with gatsby to show to Stathis.</p>

            <StaticImage
                alt="chess-knights"
                src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=826&q=80"
            />

        </Layout>

    )
}

export default AboutPage