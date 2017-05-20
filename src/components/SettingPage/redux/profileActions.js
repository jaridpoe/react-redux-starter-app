/*
 Actions are payloads of information that send data from your application to your store.
 They are the only source of information for the store
 (Actions describe something has happened)
 */

import * as types from './profileActionTypes.js'

//Action creators are exactly that—functions that create actions
export function addFirstName(firstName) {
  return {
    type: types.ADD_FIRST_NAME, firstName //*the action*
  }
}

export function addLastName(lastName){
  return {
    type: types.ADD_LAST_NAME, lastName
  }
}
