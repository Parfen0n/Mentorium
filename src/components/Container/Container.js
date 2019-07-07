import React from 'react';
import PropTypes from 'prop-types';

import ContainerStyle from './ContainerStyle.js'

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.array,
  padding: PropTypes.array,
  align: PropTypes.string,
  justifyContent: PropTypes.string,
  direction: PropTypes.string
}

Container.defaultProps = {
    children: null,
    margin: [0, 0, 0, 0],
    padding: [0, 0, 0, 0],
}

function Container({
    children, margin, padding, direction, justifyContent, align, width, height
}) {

  return (
      <ContainerStyle direction={direction} 
                      align={align} 
                      width={width} 
                      height={height} 
                      justifyContent={justifyContent} 
                      padding={padding} 
                      margin={margin}>
        { children }
    </ContainerStyle>
  );
}

export default Container;
