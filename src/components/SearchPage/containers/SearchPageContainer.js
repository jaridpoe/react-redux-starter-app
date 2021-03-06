import {searchGitHubAccount} from './../../../store/GitHub/gitHubActions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SearchPageView from '../views/SearchPageView.js'

function mapStateToProps(state) {
  return {
    gitHub: state.gitHubAccount
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchGitHubAccount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageView)


/*

 mapDispatchToProps:
 If an object is passed, each function inside it is assumed to be a Redux action creator.
 An object with the same function names, but with every action creator wrapped into a dispatch call so
 they may be invoked directly, will be merged into the component’s props

 */
