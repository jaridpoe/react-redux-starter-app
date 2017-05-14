import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/app.js'
import HomePage from '../components/HomePage/container/HomePageContainer.js'
import SettingPage from '../components/SettingPage/container/SettingPageContainer.js'


export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="settings" component={SettingPage}/>
  </Route>
)
