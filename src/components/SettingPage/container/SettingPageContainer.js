import {addName} from '../redux/settingActions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SettingPageView from '../views/SettingPageView.js'

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addName
  }, dispatch)
}

export default connect(mapDispatchToProps)(SettingPageView)
