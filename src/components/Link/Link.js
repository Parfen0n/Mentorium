import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router-dom'

import LinkStyle from './LinkStyle.js'

Link.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  to: PropTypes.string,
  big: PropTypes.bool, 
  large: PropTypes.bool, 
  small: PropTypes.bool, 
  primary: PropTypes.bool, 
  bold: PropTypes.bool, 
  inverted: PropTypes.bool,
  nowrap: PropTypes.bool,
  alignCenter: PropTypes.bool,
  withLine: PropTypes.bool
}

Link.defaultProps = {
    children: null
}

function Link({
    children, small, big, large, primary,  bold, inverted, uppercase, nowrap, alignCenter, to, src, withLine
}) {

  return (
      <LinkRouter to={to} src={src}>
        <LinkStyle small={small} 
               big={big}
               large={large}
               primary={primary}
               bold={bold}
               inverted={inverted}
               uppercase={uppercase}
               nowrap={nowrap}
               alignCenter={alignCenter}
               withLine={withLine}>
         { children }    
        </LinkStyle>
      </LinkRouter>
  );
}

export default Link;
