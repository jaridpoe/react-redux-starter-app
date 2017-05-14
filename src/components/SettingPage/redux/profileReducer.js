/*
 Reducers: how the application's state changes in response of an action

 */

import {ADD_USERNAME} from './profileActionTypes.js'

const defaultProfile = {
  userName: 'Jarid'
}

export function profileReducer(state = defaultProfile, action) {
  switch (action.type) {
    case ADD_USERNAME:
      return {...state, 'userName': action.userName}
    default:
      return state
  }
}
