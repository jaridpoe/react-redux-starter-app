/*
 Reducers: how the application's state changes in response of an action

 It should calculate the next state and return it.
 No surprises. No side effects. No API calls. No mutations. Just a calculation.

 */

import * as types from './gitHubActionTypes.js'


const defaultProfile = {
  'gitHubUsername': '',
  'statusCode': ''
}

export function gitHubAccount(state = defaultProfile, action) {
  switch (action.type) {
    case types.FETCH_GITHUB_SEARCH_SUCCESS:
      return {...state, 'gitHubUsername': action.gitHubAccount.login, 'statusCode': 'Found'}
    case types.FETCH_GITHUB_SEARCH_FAILURE:
      return {...state, 'statusCode': action.error.response.statusText}
    default:
      return state
  }
}

