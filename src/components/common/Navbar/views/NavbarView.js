import React, {PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

class NavbarView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-inverse" id="navbarHeader">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand title">React Starter</a>
            </div>

            <ul className="nav navbar-nav">
              <li>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
              </li>
              <li>
                <IndexLink to="/about" activeClassName="active">About</IndexLink>
              </li>
            </ul>

            <ul className="nav navbar-nav pull-right">
              <li id="standaloneLogoutButton">
                <IndexLink to="/" activeClassName="active"> Log
                  Out</IndexLink>
              </li>
            </ul>

          </div>
        </nav>
      </header>
    )
  }
}

export default NavbarView
