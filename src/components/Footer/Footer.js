import React from 'react';
import PropTypes from 'prop-types';

import { FooterStyle, InnerFooterStyle, InnerFooterLinks } from './FooterStyle.js'

import Text from '../Text/Text'
import Container from '../Container/Container'
import Image from '../Image/Image'
import Link from '../Link/Link'
import Logo from '../../assets/mentorium-logo.png'
import Divider from '../Divider/Divider.js';

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
            <Container justifyContent='center' direction='row'>
            <Container width='40%'>
              <Container margin={['50px', 0, 0, '100px']} direction='column'>
                <Container>
                  <Link noUnderline>
                    О нас
                  </Link>
                </Container>
                <Container>
                  <Link noUnderline>
                    Учебным заведениям
                  </Link>
                </Container>
                <Container>
                  <Link noUnderline>
                    Размещение рекламы
                  </Link>
                </Container>
                <Container>
                  <Link noUnderline>
                    Правовая информация
                  </Link>
                </Container>
              </Container>
            </Container>

            <Container width='20%' justifyContent='center' margin={['50px', 0, 0, 0]}>
              <Image src={Logo} height='140px' withBrightFilter/>
            </Container>

            <Container width='40%' justifyContent='flex-end'>
              <Container margin={['50px', '100px', 0, 0]} direction='column'>
                <Container justifyContent='flex-end'>
                <Text inverted>
                  mentorium@gmail.com
                </Text>   
                </Container>
                <Container justifyContent='flex-end'>
                <Text inverted>
                  Казахстан, Алматы, Клочкова 154
                </Text>    
                </Container>
                <Container justifyContent='center'> 
                <Divider/> 
                </Container>       
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
