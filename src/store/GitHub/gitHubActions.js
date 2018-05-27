import * as types from './gitHubActionTypes.js'
import axios from 'axios'

export function searchGitHubAccount(gitHubUsername) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios.get('https://api.github.com/users/' + gitHubUsername)
        .then(response => {
          dispatch({type: types.FETCH_GITHUB_SEARCH_SUCCESS, gitHubAccount: response})
          resolve({hasError: false, payload: response})
        })
        .catch(error => {
          dispatch({type: types.FETCH_GITHUB_SEARCH_FAILURE, error})
          reject({hasError: true, payload: error})
        })
    })
  }
}

