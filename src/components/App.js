import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

// Barreling from index file
import {Navbar, NoPageFound} from './common'
import {HomePage, SearchPage, SettingPage} from './index'

/*
React Router had dynamic routing which takes place during render, not as a configurable file outside like v3
 */

const App = () => (
  <div>
    <Navbar/>
    <div className="container-fluid">
      <div className="row">

        <Switch>
          <Route exact path={`/`} component={HomePage}/>
          <Route path={`/search`} component={SearchPage}/>
          <Route path={`/settings`} component={SettingPage}/>
          <Route component={NoPageFound}/>
        </Switch>

      </div>
    </div>

  </div>
)


export default App
