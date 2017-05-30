import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap'
import {FormInput} from '../../common/FormControl/views/FormInput.js'

class SearchPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      gitHubUsername: props.gitHubUsername
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({gitHubUsername: event.target.value})
  }


  handleSubmit() {
    if (this.props.gitHubUsername !== this.state.gitHubUsername) {
      this.props.searchGitHubUsername(this.state.gitHubUsername)
    }

  }


  render() {
    return (
      <div className="container-fluid">

        <h1> GitHub Search</h1>
        <br />

        <form className="container-fluid">

          <FormInput id="gitHubUsername"
                     type="text"
                     label="GitHub Username"
                     value={this.state.gitHubUsername}
                     onChange={this.handleChange}/>

          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>

        </form>
      </div>
    );
  }
}

SearchPageView.propTypes = {
  searchGitHubUsername: PropTypes.func,

  gitHubUsername: PropTypes.string
}

export default SearchPageView
