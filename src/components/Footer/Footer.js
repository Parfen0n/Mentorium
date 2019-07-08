import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyle, InnerFooterStyle } from './FooterStyle.js'

import Text from '../Text/Text'
import Container from '../Container/Container'
import Link from '../Link/Link'

Footer.propTypes = {
	children: PropTypes.node,
}

Footer.defaultProps = {
    children: null,

}

function Footer({
    children
}) {


  return (
    <FooterStyle>
        <InnerFooterStyle>
        </InnerFooterStyle>
    </FooterStyle>
  );
}

export default Footer;
