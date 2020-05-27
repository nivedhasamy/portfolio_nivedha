import React from "react"
import { Link } from "gatsby"
import Home from '../sections/home';
import About from '../sections/about';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';
import Blogs from '../sections/blogs';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
    <SEO title="Hello"/>

    <Home />
     <About />
    
    <Portfolio />
   <Blogs/>
     <Contact />
  </Layout>
)

export default IndexPage