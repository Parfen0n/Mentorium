import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyle, InnerFooterStyle } from './FooterStyle.js'

import Text from '../Text/Text'
import Container from '../Container/Container'
import Image from '../Image/Image'
import Link from '../Link/Link'

import FooterImg from '../../assets/uploading.png'

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
    <>
    <Container position='relative'>
      <Container top='-300px' left='-500px' position='absolute' zIndex={100}>
          <Image src={FooterImg} size='90%'/>
        </Container>
      <FooterStyle>
          <InnerFooterStyle>
          </InnerFooterStyle>
      </FooterStyle>
    </Container>
    </>
  );
}

export default Footer;
