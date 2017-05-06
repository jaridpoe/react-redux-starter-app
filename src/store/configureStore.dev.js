import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import appReducer from './appReducer.js';


export default function configureStore(initialState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    appReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    )
  )
}
