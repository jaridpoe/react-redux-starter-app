/*
 Actions are payloads of information that send data from your application to your store.
 They are the only source of information for the store
 (Actions describe something has happened)
 */

import {ADD_NAME} from './settingActionTypes.js'

//Action creators are exactly that—functions that create actions
export function addName(name) {
  return {
    type: ADD_NAME, name
  }
}
