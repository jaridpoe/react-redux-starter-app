import React, {PropTypes} from 'react';

class HomePageView extends React.Component {

  render() {
    return (
      <div className="container-fluid">

        <h1>
          <p>
            My first name is {this.props.firstName} and my last name is {this.props.lastName}.
          </p>
          <br/>
          <p>
            My full name is {this.props.fullName}
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
