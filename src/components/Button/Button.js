import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './ButtonStyle.js'

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool, 
}

Button.defaultProps = {
    children: null,
}

export default  function Button({
    children, primary
}) {

  return (
    <ButtonStyle primary={primary}>
        { children }
    </ButtonStyle>
  );
}