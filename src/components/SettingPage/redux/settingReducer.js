/*
 Reducers: how the application's state changes in response of an action

 */

import {ADD_NAME} from './settingActionTypes.js'

export function settingReducer(state = 'Jarid', action) {
  switch (action.type) {
    case ADD_NAME:
      return action.name
    default:
      return state
  }
}
