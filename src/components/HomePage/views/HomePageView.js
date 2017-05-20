import React, {PropTypes} from 'react';

class HomePageView extends React.Component {

  render() {
    return (
      <div className="container-fluid">

        <h1>
          <p>
            First name: {this.props.firstName}
            <br />
            Last name: {this.props.lastName}
          </p>
          <br/>
          <p>
            Full name: {this.props.fullName}
          </p>
        </h1>

      </div>
    );
  }
}

HomePageView.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  fullName: PropTypes.string
}


export default HomePageView
