import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import appReducer from './appReducer.js';

/*

The store holds the whole state tree. Think of the store as a pie chart and each slice is a reducer

 */

export default function configureStore() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}
