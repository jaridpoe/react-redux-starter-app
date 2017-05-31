/*
 Reducers: how the application's state changes in response of an action

 It should calculate the next state and return it.
 No surprises. No side effects. No API calls. No mutations. Just a calculation.

 */

import * as types from './profileActionTypes.js'


const defaultProfile = {
  firstName: 'Jarid',
  lastName: 'Poe'
}

export function profile(state = defaultProfile, action) {
  switch (action.type) {
    case types.MODIFY_FIRST_NAME:
      return {...state, 'firstName': action.firstName}
    case types.MODIFY_LAST_NAME:
      return {...state, 'lastName': action.lastName}
    default:
      return state
  }
}

