import React from 'react';
import PropTypes from 'prop-types';


import { HeaderStyle, HeaderLogoStyle, HeaderItemStyle, HeaderItemsStyle } from './HeaderStyle.js'

import Logo from '../../assets/mentorium-logo.png'
import Text from '../Text/Text'
import Container from '../Container/Container'
import Link from '../Link/Link'




Header.propTypes = {
	children: PropTypes.node,
}

Header.defaultProps = {
    children: null,

}

function Header({
    children
}) {

    const headerItems = [
        {
            title: 'Выбор профессии',
            to: '/choose_profession',
        },
        {
            title: 'Тесты',
            to: '/tests',
        },
        {
            title: 'Вузы',
            to: '/choose_university',
        },
        {
            title: 'Курсы',
            to: '/courses',
        },
    ]

  return (
    <HeaderStyle>
        <Container direction='row' align='center'>
            <HeaderLogoStyle src={Logo} />
            <Text>mentorium</Text>
        </Container>
        <HeaderItemsStyle>
            {headerItems.map(item => {
                    return (
                        <HeaderItemStyle>
                            <Link withLine inverted nowrap to={`${item.to}`}>
                                {item.title} 
                            </Link>
                        </HeaderItemStyle>
                    )
                    
            })}
            <HeaderItemStyle>
                <Link inverted nowrap to={'/sign-in'}>
                    Войти
                </Link>
            </HeaderItemStyle>
            <HeaderItemStyle>
                <Link primary nowrap to={'/sign-up'}>
                    Начать 
                </Link>
            </HeaderItemStyle>
        </HeaderItemsStyle>
    </HeaderStyle>
  );
}

export default Header;
