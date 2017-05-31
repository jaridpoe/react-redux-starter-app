import {combineReducers} from 'redux'
import {profile} from '../components/SettingPage/redux/profileReducer.js'
import {gitHubAccount} from '../components/SearchPage/redux/gitHubReducer.js'

const appReducer = combineReducers({
  profile,
  gitHubAccount
});


export default appReducer
