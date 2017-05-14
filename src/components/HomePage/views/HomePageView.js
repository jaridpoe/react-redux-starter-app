import React, {PropTypes} from 'react';

class HomePageView extends React.Component {

  render() {
    return (
      <div className="container-fluid">

        <h1>Hi, my name is {this.props.userName}. (* ^ ω ^)	</h1>

      </div>
    );
  }
}

HomePageView.propTypes = {
  userName: PropTypes.string
}


export default HomePageView
