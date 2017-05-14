import { connect } from 'react-redux'
import HomePageView from '../views/HomePageView.js'

function mapStateToProps(state){
  return {
    userName: state.profileReducer.userName
  }
}

export default connect(mapStateToProps)(HomePageView)
