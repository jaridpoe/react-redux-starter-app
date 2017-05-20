import {connect} from 'react-redux'
import HomePageView from '../views/HomePageView.js'
import FullName from '../../../selectors/getFullNameSelector.js'

function mapStateToProps(state) {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    fullName: FullName(state) // selector
  }
}

export default connect(mapStateToProps, null)(HomePageView)


/*

 mapStateToProps:
 If this argument is specified, the new component will subscribe to Redux store updates.
 This means that any time the store is updated, mapStateToProps will be called.
 The results of mapStateToProps must be a plain object*, which will be merged into the component’s props.
 If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps

 */
