import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'


export function FormInput({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string
}
