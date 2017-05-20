import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore.dev.js';
import {Router, browserHistory} from 'react-router';
import routes from './routes/routes.js'
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/*

 Provider makes the Redux store available to your containers (It makes your components 'smart')

 */

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
)
