import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyle from './ButtonStyle.js'

Button.propTypes = {
    children: PropTypes.node,
    primary: PropTypes.bool,
    secondary: PropTypes.bool, 
    big: PropTypes.bool,
    bar: PropTypes.bool,
}

Button.defaultProps = {
    children: null,
    onClick: () => {}
}

export default  function Button({
    children, primary, secondary, big, bar, onClick
}) {

  return (
    <ButtonStyle onClick={onClick} primary={primary} big={big} bar={bar} secondary={secondary}>
        { children }
    </ButtonStyle>
  );
}