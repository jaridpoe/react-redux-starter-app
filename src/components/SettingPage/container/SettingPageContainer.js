import {addUserName} from '../redux/profileActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SettingPageView from '../views/SettingPageView.js'

function mapStateToProps(state){
  return {
    userName: state.profileReducer.userName
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addUserName
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPageView)
