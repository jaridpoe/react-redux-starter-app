import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import configureStore from './store/configureStore.dev.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

import App from './components/App'

/*
 Provider makes the Redux store available to your containers (It makes your components 'smart')
 */

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)
