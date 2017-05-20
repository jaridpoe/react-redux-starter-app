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
                <IndexLink to="/settings" activeClassName="active">Settings</IndexLink>
              </li>
            </ul>

          </div>
        </nav>
      </header>
    )
  }
}

export default NavbarView
