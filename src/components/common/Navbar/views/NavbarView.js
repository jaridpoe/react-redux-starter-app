import React from 'react'
import PropTypes from 'prop-types'

import {LinkContainer} from 'react-router-bootstrap'
import {Link, NavLink} from "react-router-dom"
import {Nav, Navbar, NavItem} from "react-bootstrap"

class NavbarView extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            React Starter
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>

          <LinkContainer exact={true} to="/home">
            <NavItem eventKey={1}>
              Home
            </NavItem>
          </LinkContainer>

          <LinkContainer exact={true} to="/search">
            <NavItem eventKey={2}>
              Search
            </NavItem>
          </LinkContainer>

          <LinkContainer exact={true} to="/settings">
            <NavItem eventKey={3}>
              Settings
            </NavItem>
          </LinkContainer>
          
        </Nav>
      </Navbar>
    )
  }
}

NavbarView.propType = {}

export default NavbarView
