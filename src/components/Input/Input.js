import React from 'react';
import PropTypes from 'prop-types';

import InputStyle from './InputStyle.js'

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

Input.defaultProps = {
  onChange: () => {}
}

export default function Input({
    type, placeholder, onChange
}) {

  return (
    <InputStyle onChange={onChange} type={type} placeholder={placeholder}>
    </InputStyle>
  );
}