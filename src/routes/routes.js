import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/app.js'
import HomePage from '../components/HomePage/views/HomePageView.js'
import SettingPage from '../components/SettingPage/views/SettingPageView.js'


export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="settings" component={SettingPage} />
  </Route>
)
