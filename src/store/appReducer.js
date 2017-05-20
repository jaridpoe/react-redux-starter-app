import {combineReducers} from 'redux'
import {profile} from '../components/SettingPage/redux/profileReducer.js'

const appReducer = combineReducers({
  profile
});


export default appReducer
