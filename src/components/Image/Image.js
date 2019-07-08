import React from 'react';
import PropTypes from 'prop-types';

import ImageStyle from './ImageStyle.js'

Image.propTypes = {
	children: PropTypes.node,
    size: PropTypes.string,
    src: PropTypes.string
}

Image.defaultProps = {
    children: null
}

function Image({
    children, size, src
}) {

  return (
    <ImageStyle src={src} size={size}>
        { children }
    </ImageStyle>
  );
}

export default Image;
