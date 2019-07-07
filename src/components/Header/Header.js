import React from 'react';
import PropTypes from 'prop-types';
import {  Link } from 'react-router-dom'


import { HeaderStyle, HeaderLogoStyle, HeaderItemStyle, HeaderItemsStyle } from './HeaderStyle.js'

import Logo from '../../assets/mentorium-logo.png'
import Text from '../Text/Text'
import Container from '../Container/Container'



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
        {
            title: 'Начать',
            to: '/community',
        }
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
                            <Link to={`${item.to}`}>
                                <Text inverted nowrap > 
                                {item.title} 
                                </Text>
                            </Link>
                        </HeaderItemStyle>
                    )
            })}
        </HeaderItemsStyle>
    </HeaderStyle>
  );
}

export default Header;
