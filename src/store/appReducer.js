import {combineReducers} from 'redux'
import {settingReducer} from '../components/SettingPage/redux/settingReducer.js'

const appReducer = combineReducers({
  settingReducer
});


export default appReducer
