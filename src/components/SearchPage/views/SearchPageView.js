import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

import {FormInput} from "../../common/"

class SearchPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      gitHubUsername: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div>
        <div className="col-md-6">

          <h1> GitHub Search</h1>
          <br/>

          <form className="form-inline" onSubmit={this.handleSubmit}>
            <FormInput id="gitHubUsername"
                       placeholder="Enter username"
                       type="text"
                       label="GitHub Username: "
                       value={this.state.gitHubUsername}
                       onChange={this.handleChange}/>

            <Button bsStyle="default">Search</Button>
          </form>
        </div>

        <div className="col-md-6">
          <img src={this.props.gitHub.avatarUrl} className="img-thumbnail avatar-image center-block"/>
        </div>

      </div>
    )
  }

  handleChange(event) {
    this.setState({gitHubUsername: event.target.value})
  }

  handleSubmit(event) {

    event.preventDefault()

    if (this.props.gitHubUsername !== this.state.gitHubUsername) {
      this.props.searchGitHubAccount(this.state.gitHubUsername)
    }
  }


}

SearchPageView.propTypes = {
  searchGitHubAccount: PropTypes.func,
  gitHubUsername: PropTypes.string,
  gitHub: PropTypes.object
}

export default SearchPageView
