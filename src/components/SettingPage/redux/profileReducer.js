/*
 Reducers: how the application's state changes in response of an action

 It should calculate the next state and return it.
 No surprises. No side effects. No API calls. No mutations. Just a calculation.

 */

import * as types from './profileActionTypes.js'


const defaultProfile = {
  firstName: 'Jarid',
  lastName: 'Poe',
  birthDate: '1990-02-02'
}

export function profile(state = defaultProfile, action) {
  switch (action.type) {
    case types.MODIFY_FIRST_NAME:
      return {...state, 'firstName': action.firstName}
    case types.MODIFY_LAST_NAME:
      return {...state, 'lastName': action.lastName}
    case types.MODIFY_BIRTH_DATE:
      return {...state, 'birthDate': action.birthDate}
    default:
      return state
  }
}

