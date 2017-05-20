import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SettingPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }

  handleSubmit(event) {
    this.props.addFirstName(this.state.firstName)
    this.props.addLastName(this.state.lastName)
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">

        <h1> User Profile </h1>
        <br />

        <form className="container-fluid">

          <FormGroup controlId="name">

            <ControlLabel>First Name</ControlLabel>
            <FormControl bsSize="small" value={this.state.firstName} onChange={this.handleFirstNameChange}/>

            <ControlLabel>Last Name</ControlLabel>
            <FormControl bsSize="small" value={this.state.lastName} onChange={this.handleLastNameChange}/>

          </FormGroup>

          <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>

        </form>
      </div>
    );
  }
}

SettingPageView.propTypes = {
  addFirstName: PropTypes.func,
  addLastName: PropTypes.func,
  lastName: PropTypes.string,
  firstName: PropTypes.string
}

export default SettingPageView
