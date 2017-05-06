import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from '../components/app.js'
import HomePage from '../components/HomePage/views/HomePageView.js'
import AboutPage from '../components/AboutPage/views/AboutPageView.js'


export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage} />
  </Route>
)
