import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <p>What a galaxy.</p>
    <img src="https://source.unsplash.com/random/400x200" alt=""/>
    <br />
    <form method="get" action="/about">
      <button className="primaryButton pt10">Learn more</button>
    </form>
  </Layout>
)
