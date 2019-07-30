import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyle, InnerFooterStyle, InnerFooterLinks } from './FooterStyle.js'

import Text from '../Text/Text'
import Container from '../Container/Container'
import Image from '../Image/Image'
import Link from '../Link/Link'
import Logo from '../../assets/mentorium-logo.png'

// import FooterImg from '../../assets/uploading.png'

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

      <FooterStyle>
          <InnerFooterStyle>
            <Container direction='row' justifyContent='center'>
            <Container width='30.5%'>
              <Container align='center' direction='column' margin={['50px', 0, 0, '200px']}>
            <Link withoutLine inverted nowrap>
              О нас
            </Link>
            <Link withoutLine inverted nowrap>
              Учебным заведениям
            </Link>
            <Link withoutLine inverted nowrap>
              Размещение рекламы
            </Link>
            <Link withoutLine inverted nowrap>
              Правовая информация
            </Link>
              </Container>
            </Container>

            <Container width='30.5%' justifyContent='center' margin={['20px', 0, 0, 0]}>
              <Image src={Logo} height='150px' withBrightFilter/>
            </Container>

            <Container width='30.5%'>
              <Container align='center' direction='column' margin={['50px', '200px', 0, 0]}>
            <Link withoutLine inverted nowrap>
              О нас
            </Link>
            <Link withoutLine inverted nowrap>
              Учебным заведениям
            </Link>
            <Link withoutLine inverted nowrap>
              Размещение рекламы
            </Link>
            <Link withoutLine inverted nowrap>
              Правовая информация
            </Link>
              </Container>
            </Container>
            </Container>
          </InnerFooterStyle>
      </FooterStyle>
    </Container>
    </>
  );
}

export default Footer;
