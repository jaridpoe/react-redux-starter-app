import React from 'react'
import PropTypes from 'prop-types'
import {Alert} from 'react-bootstrap'


class AlertView extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleDismiss = this.handleDismiss.bind(this)
    this.state = {
      show: props.show
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.show != nextProps.show) {
      this.setState({show: nextProps.show})
    }
  }

  render() {
    const {bsClass, title, message} = this.props
    const {show} = this.state
    if (show) {
      return (
        <Alert bsStyle={bsClass} onDismiss={this.handleDismiss}>
          <h4>{title}</h4>
          <p>
            {message}
          </p>
        </Alert>
      )
    } else return null
  }

  handleDismiss() {
    this.setState({show: false});
  }

}

AlertView.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  bsClass: PropTypes.string,
}

AlertView.defaultProps = {
  bsClass: 'warning',
  title: 'Oh snap! You got an error!',
  message: 'There was an error. Please fix it!',
  show: false
}

export default AlertView
