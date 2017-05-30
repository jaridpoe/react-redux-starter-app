import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap'
import {FormInput} from '../../common/FormControl/views/FormInput.js'

class SettingPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }


  handleSubmit() {
    if (this.props.firstName !== this.state.firstName) {
      this.props.addFirstName(this.state.firstName)
    }

    if (this.props.lastName !== this.state.lastName) {
      this.props.addLastName(this.state.lastName)
    }
  }


  render() {
    return (
      <div className="container-fluid">

        <h1> User Profile</h1>
        <br />

        <form className="container-fluid">

          <FormInput id="firstName"
                     type="text"
                     label="First Name"
                     value={this.state.firstName}
                     onChange={this.handleChange}/>

          <FormInput id="lastName"
                     type="text"
                     label="Last Name"
                     value={this.state.lastName}
                     onChange={this.handleChange}/>

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
  firstName: PropTypes.string,
}

export default SettingPageView
