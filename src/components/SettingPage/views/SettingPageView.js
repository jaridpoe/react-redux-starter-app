import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class SettingPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addName(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <form className="container-fluid">

        <FormGroup controlId="name">

          <ControlLabel>Name</ControlLabel>

          <FormControl bsSize="small" value={this.state.value} onChange={this.handleChange}/>

        </FormGroup>

        <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>

      </form>
    );
  }
}

SettingPageView.propTypes = {
  addName: PropTypes.func
}

export default SettingPageView
