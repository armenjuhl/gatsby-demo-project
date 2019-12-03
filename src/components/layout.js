import React from "react"
import "./layout.css"
import Header from "./header"
import { Link } from "gatsby"


export default ({ children }) =>
  (
    <div>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!"/>
      {children}
    </div>
)
