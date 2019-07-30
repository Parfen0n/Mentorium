import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './CardStyle.js'

Card.propTypes = {
    children: PropTypes.node,
}

Card.defaultProps = {
    children: null,
}

export default function Card({
    children
}) {

  return (
    <CardStyle >
        { children }
    </CardStyle>
  );
}