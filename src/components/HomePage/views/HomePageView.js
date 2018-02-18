import React from 'react'
import PropTypes from 'prop-types'

class HomePageView extends React.Component {

  render() {
    return (
      <div className="col-md-12">

        <h1>Home</h1>

        <p>
          First name: {this.props.firstName}
          <br />
          Last name: {this.props.lastName}
        </p>
        <br/>
        <p>
          Full name: {this.props.fullName}
        </p>

        <p>
          Birth date: {this.props.birthDate}
        </p>

      </div>

    );
  }
}

HomePageView.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  fullName: PropTypes.string,
  birthDate: PropTypes.string
}


export default HomePageView
