import React from 'react'
import {Link} from 'react-router-dom'

import HomePage from './../../../HomePage/container/HomePageContainer'

export const NoPageFound = ({location}) => (
  <div className={"container-fluid"}>
    <h4>
      No page found <code>{location.pathname}</code> return to <Link to="/" component={HomePage}>Home</Link>
    </h4>
  </div>
)
