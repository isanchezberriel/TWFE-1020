import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Restaurante from "../components/objeto"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Página de componentes de Gatsby</h1>
    <p>Práctica "Gatsby"</p>
    
    <Objeto id="1"></Objeto>
    <Objeto id="2"></Objeto>    

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage