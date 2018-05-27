/*
 Reducers: how the application's state changes in response of an action

 It should calculate the next state and return it.
 No surprises. No side effects. No API calls. No mutations. Just a calculation.

 */

import * as types from './gitHubActionTypes.js'

const defaultGitHub = {
  'avatarUrl': '',
  'statusText': ''
}

export function gitHubAccount(state = defaultGitHub, action) {
  switch (action.type) {
    case types.FETCH_GITHUB_SEARCH_SUCCESS:
      return {...state, 'avatarUrl': action.gitHubAccount.data.avatar_url, 'statusText': action.gitHubAccount.statusText}
    case types.FETCH_GITHUB_SEARCH_FAILURE:
      return {...state, 'statusText': action.error.response.statusText}
    default:
      return state
  }
}
