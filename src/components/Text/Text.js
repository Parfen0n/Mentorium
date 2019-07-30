import React from 'react';
import PropTypes from 'prop-types';

import TextStyle from './TextStyle.js'

Text.propTypes = {
  children: PropTypes.node,
  big: PropTypes.bool, 
  large: PropTypes.bool, 
  small: PropTypes.bool, 
  secondary: PropTypes.bool, 
  primary: PropTypes.bool, 
  bold: PropTypes.bool, 
  inverted: PropTypes.bool,
  nowrap: PropTypes.bool,
  alignCenter: PropTypes.bool
}

Text.defaultProps = {
    children: null
}

function Text({
    children, small, big, large, primary, secondary, bold, inverted, uppercase, nowrap, alignCenter
}) {

  return (
    <TextStyle small={small} 
               big={big}
               large={large}
               primary={primary}
               secondary={secondary}
               bold={bold}
               inverted={inverted}
               uppercase={uppercase}
               nowrap={nowrap}
               alignCenter={alignCenter}
               >
        { children }
    </TextStyle>
  );
}

export default Text;
