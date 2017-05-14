import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SettingPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  }

  handleSubmit(event) {
    this.props.addUserName(this.state.userName)
    event.preventDefault();
  }

  render() {
    return (
      <form className="container-fluid">

        <FormGroup controlId="name">

          <ControlLabel>Name</ControlLabel>

          <FormControl bsSize="small" value={this.state.userName} onChange={this.handleChange}/>

        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>

      </form>
    );
  }
}

SettingPageView.propTypes = {
  addUserName: PropTypes.func
}

export default SettingPageView
