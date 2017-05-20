/*
 Reducers: how the application's state changes in response of an action

 It should calculate the next state and return it.
 No surprises. No side effects. No API calls. No mutations. Just a calculation.

 */

import {ADD_FIRST_NAME, ADD_LAST_NAME} from './profileActionTypes.js'

const defaultProfile = {
  firstName: 'Frodo',
  lastName: 'Baggins'
}

export function profileReducer(state = defaultProfile, action) {
  switch (action.type) {
    case ADD_FIRST_NAME:
      return {...state, 'firstName': action.firstName}
    case ADD_LAST_NAME:
      return {...state, 'lastName': action.lastName}
    default:
      return state
  }
}

