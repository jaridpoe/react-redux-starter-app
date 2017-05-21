import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SettingPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }


  handleSubmit(event) {

    if (this.props.firstName !== this.state.firstName) {
      this.props.addFirstName(this.state.firstName)
    }

    if (this.props.lastName !== this.state.lastName) {
      this.props.addLastName(this.state.lastName)
    }

    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid">

        <h1> User Profile </h1>
        <br />

        <form className="container-fluid">

          <FormGroup controlId="firstName">
            <ControlLabel>First Name</ControlLabel>
            <FormControl bsSize="small" value={this.state.firstName} onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup controlId="lastName">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl bsSize="small" value={this.state.lastName} onChange={this.handleChange}/>
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
