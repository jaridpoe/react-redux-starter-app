import React, {PropTypes} from 'react'
import Navbar from './common/Navbar/views/NavbarView.js'

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}


export default App;
