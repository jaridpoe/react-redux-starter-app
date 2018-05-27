/*
 Actions are payloads of information that send data from your application to your store.
 They are the only source of information for the store
 (Actions describe something has happened)
 */

import * as types from './profileActionTypes.js'

//Action creators are exactly that—functions that create actions
export function addFirstName(firstName) {
  return {
    type: types.MODIFY_FIRST_NAME, firstName //*the action*
  }
}

export function addLastName(lastName) {
  return {
    type: types.MODIFY_LAST_NAME, lastName
  }
}

export function addBirthDate(birthDate) {
  return {
    type: types.MODIFY_BIRTH_DATE, birthDate
  }
}
