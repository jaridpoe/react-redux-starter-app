import React, {PropTypes} from 'react'
import Navbar from './common/Navbar/views/NavbarView.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}


export default App;
