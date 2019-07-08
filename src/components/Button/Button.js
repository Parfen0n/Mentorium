import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './ButtonStyle.js'

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool, 
    big: PropTypes.bool, 

}

Button.defaultProps = {
    children: null,
}

export default  function Button({
    children, primary, big
}) {

  return (
    <ButtonStyle primary={primary} big={big}>
        { children }
    </ButtonStyle>
  );
}