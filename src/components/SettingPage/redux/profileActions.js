/*
 Actions are payloads of information that send data from your application to your store.
 They are the only source of information for the store
 (Actions describe something has happened)
 */

import {ADD_USERNAME} from './profileActionTypes.js'

//Action creators are exactly that—functions that create actions
export function addUserName(userName) {
  return {
    type: ADD_USERNAME, userName //*the action*
  }
}
