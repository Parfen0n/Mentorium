import React from 'react';
import PropTypes from 'prop-types';


import { HeaderStyle, HeaderLogoStyle, HeaderItemsStyle, HeaderLogoItems, HeaderActiveLinksStyle, Hello } from './HeaderStyle.js'

import Logo from '../../assets/mentorium-logo.png'
import Text from '../Text/Text'
import Link from '../Link/Link'
import Button from '../Button/Button'




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
            to: '/universities',
        },
        {
            title: 'Курсы',
            to: '/courses',
        },
    ]



    return (
        <Header>
        <HeaderStyle>
            <Button bar><i className = "fa fa-bars"></i></Button>
            <HeaderLogoItems>
                <HeaderLogoStyle src={Logo} />
                <Text>mentorium</Text>
            </HeaderLogoItems>
            <Button bar><i className = "fa fa-user"></i></Button>
            <HeaderItemsStyle>
                {headerItems.map(item => {
                    return (

                        <Link navBar to={`${item.to}`}>
                            {item.title}
                        </Link>
    
                    )

                })}
                { <HeaderActiveLinksStyle>
                {/* <Link navBar inverted to={'/sign-in'}>
                    Войти
                </Link> */}

                <Link primary nowrap to={'/sign-up'}>
                    Начать
                </Link>
                </HeaderActiveLinksStyle>}
            </HeaderItemsStyle>
            
        </HeaderStyle>
        <Hello></Hello>
        </Header>
        
    );
}

export default Header;
