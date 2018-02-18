import React from 'react'
import {Route} from 'react-router-dom'

import Navbar from './../components/common/Navbar/views/NavbarView.js'
import HomePage from './../components/HomePage/container/HomePageContainer.js'
import SearchPage from './../components/SearchPage/containers/SearchPageContainer'
import SettingPage from './../components/SettingPage/container/SettingPageContainer'

/*
React Router had dynamic routing which takes place during render, not as a configurable file outside like v3
 */

const App = () => (
  <div>
    <Navbar/>
    <div className="container-fluid">
      <div className="row">
        <Route exact path={`/`} component={HomePage}/>
        <Route path={`/search`} component={SearchPage}/>
        <Route path={`/settings`} component={SettingPage}/>
      </div>
    </div>

  </div>
)


export default App
