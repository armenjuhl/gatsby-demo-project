import React from "react"
import "./layout.css"
import Header from "./header"
import { Link } from "gatsby"


export default ({ children }) =>
  (
    <div className="container">
      <Link to="/contact/">Contact</Link>
      <div>
        <div className="pt1h">&nbsp;</div>
        <Header headerText="Hello Gatsby!"/>
        {children}
      </div>
    </div>
)
