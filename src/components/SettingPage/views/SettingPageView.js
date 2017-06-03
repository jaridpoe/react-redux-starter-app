import React, {PropTypes} from 'react';

class SettingPageView extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      birthDate: props.birthDate
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

    if (this.props.birthDate !== this.state.birthDate) {
      this.props.addBirthDate(this.state.birthDate)
    }

    event.preventDefault()
  }


  render() {
    return (
      <div className="col-md-12">
        <h1> User Profile</h1>

        <fieldset>

          <lengend>
            <h3>Person Information</h3>
          </lengend>

          <form onSubmit={this.handleSubmit}>
            <label>
              First name:
              <input type="text"
                     id="firstName"
                     maxLength="12"
                     className="form-control"
                     value={this.state.firstName}
                     onChange={this.handleChange}
                     required="required"/>
            </label>

            {" "}

            <label>
              Last name:
              <input type="text"
                     id="lastName"
                     maxLength="15"
                     className="form-control"
                     value={this.state.lastName}
                     onChange={this.handleChange}
                     required="required"/>
            </label>

            <br />
            <br />

            <label>
              Birth date:
              <input type="date"
                     className="form-control"
                     id="birthDate"
                     onChange={this.handleChange}
                     required="required"/>
            </label>

            <br />
            <br />

            <button className="btn btn-default">
              <span className="glyphicon glyphicon-ok"/> Save
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

SettingPageView.propTypes = {
  addFirstName: PropTypes.func,
  addLastName: PropTypes.func,
  addBirthDate: PropTypes.func,

  lastName: PropTypes.string,
  firstName: PropTypes.string,
  birthDate: PropTypes.string
}

export default SettingPageView
