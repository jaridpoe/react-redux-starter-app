import * as types from './gitHubActionTypes.js'
import axios from 'axios'


export function searchGitHubUsername(gitHubUsername) {

  return dispatch => {
    axios.get('https://api.github.com/users/' + gitHubUsername)
      .then(response => dispatch({type: types.FETCH_GITHUB_SEARCH_SUCCESS, gitHubAccount: response.data}))
      .catch(response => dispatch({type: types.FETCH_GITHUB_SEARCH_FAILURE, error: response}))
  }
}

