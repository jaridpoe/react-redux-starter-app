import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import configureStore from './store/configureStore.dev.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

import Navbar from './components/common/Navbar/views/NavbarView.js'
import HomePage from './components/HomePage/container/HomePageContainer.js'
import SearchPage from './components/SearchPage/containers/SearchPageContainer'
import SettingPage from './components/SettingPage/container/SettingPageContainer'


/*
 Provider makes the Redux store available to your containers (It makes your components 'smart')
 */

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/">
          <div className="container-fluid">
            <div className="row">
              <Route path={`/home`} component={HomePage}/>
              <Route path={`/search`} component={SearchPage}/>
              <Route path={`/settings`} component={SettingPage}/>
            </div>
          </div>
        </Route>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)

{/*<Router history={browserHistory} routes={routes}/>*/
}
