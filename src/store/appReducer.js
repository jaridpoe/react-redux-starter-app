import {combineReducers} from 'redux'
import {profile} from './Profile/profileReducer'
import {gitHubAccount} from './GitHub/gitHubReducer'

const appReducer = combineReducers({
  profile,
  gitHubAccount
});


export default appReducer
