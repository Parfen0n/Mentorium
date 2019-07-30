import React from 'react';
import PropTypes from 'prop-types';

import ImageStyle from './ImageStyle.js'

Image.propTypes = {
	children: PropTypes.node,
    size: PropTypes.string,
    src: PropTypes.string,
    borderRadius: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    withFilter: PropTypes.bool,
    withBrightFilter: PropTypes.bool
}

Image.defaultProps = {
    children: null
}

function Image({
    children, size, src, borderRadius, width, height, withFilter, withBrightFilter
}) {

  return (
    <ImageStyle withFilter={withFilter} withBrightFilter={withBrightFilter} height={height} width={width} src={src} size={size} borderRadius={borderRadius}>
        { children }
    </ImageStyle>
  );
}

export default Image;
