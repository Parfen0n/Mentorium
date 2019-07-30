import React from 'react';
import PropTypes from 'prop-types';

import CardStyle from './CardStyle.js'

Card.propTypes = {
    children: PropTypes.node,
    forArticle: PropTypes.bool
}

Card.defaultProps = {
    children: null,
}

export default function Card({
    children, forArticle
}) {

  return (
    <CardStyle forArticle={forArticle}>
        { children }
    </CardStyle>
  );
}