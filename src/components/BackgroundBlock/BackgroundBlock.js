import React from 'react';
import PropTypes from 'prop-types';

import BackgroundBlockStyle from './BackgroundBlockStyle.js'

BackgroundBlock.propTypes = {
    children: PropTypes.node,
    top: PropTypes.number,
    left: PropTypes.number,
    lightBlue: PropTypes.string
}

BackgroundBlock.defaultProps = {
    children: null,
    top: 50,
    left: 50
}

export default  function BackgroundBlock({
    lightBlue, top, left
}) {

  return (
    <BackgroundBlockStyle left={left} top={top} lightBlue={lightBlue}>
    </BackgroundBlockStyle>
  );
}