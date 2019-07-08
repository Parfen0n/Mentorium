import React from 'react';
import PropTypes from 'prop-types';

import InputStyle from './InputStyle.js'

Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string
}

Input.defaultProps = {
}

export default function Input({
    type, placeholder
}) {

  return (
    <InputStyle type={type} placeholder={placeholder}>
    </InputStyle>
  );
}