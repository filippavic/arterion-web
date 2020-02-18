import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">ARTERION</Link>
        </div>

        <div className="header-menu">
          <Link to="/">KONTAKT</Link>
        </div>
      </div>
    </div>
  </header>
)


export default Header
