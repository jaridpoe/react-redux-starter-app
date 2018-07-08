import React from 'react'
import { hot } from 'react-hot-loader'

import {NavBar, HomePage, SearchPage, SettingPage} from './../components'
import {Route, Switch, Redirect} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <NavBar/>
          <Switch>
            <Route path={'/home'} component={HomePage} exact/>
            <Route path={'/search'} component={SearchPage} exact/>
            <Route path={'/settings'} component={SettingPage} exact/>
            <Redirect from={'/'} to={'/home'}/>
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {}

export default hot(module)(App)
