import {addFirstName, addLastName, addBirthDate} from '../redux/profileActions.js'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SettingPageView from '../views/SettingPageView.js'

function mapStateToProps(state) {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    birthDate: state.profile.birthDate
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addFirstName,
    addLastName,
    addBirthDate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingPageView)


/*

 mapDispatchToProps:
 If an object is passed, each function inside it is assumed to be a Redux action creator.
 An object with the same function names, but with every action creator wrapped into a dispatch call so
 they may be invoked directly, will be merged into the component’s props

 */
