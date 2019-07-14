import React, { Component } from 'react';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';

import SignInImage from '../../assets/sign-in.png'




export default class SignIn extends Component {

    render () {
        return (
            <>
                <BackgroundBlock yellow width='950px' rotate={45} top={-50} left={-600}/>
                <Container margin={[0, 0, 0, 0]} align='center'>
                    <Container width='50%' direction='column' padding={['8%', '0', 0, '0']}>
                        <Image size='100%' src={SignInImage} />
                    </Container>
                    <Container width='50%' align='center' direction='column' padding={['50px', '10%', 0, '10%']}>
                        <Text large bold>
                            Добро пожаловать!
                        </Text>
                        <Container width='40%' height='30px' justifyContent='space-around'>
                                <Text nowrap secondary>
                                    Еще не зарегистрировались?
                                </Text>
                                <Link nowrap>
                                    Создать аккаунт
                                </Link>
                        </Container>
                        <Container width='100%' direction='column' padding={['0', '10%', 0, '10%']}>
                            <Input type='text' placeholder='E-mail' />
                            <Input type='password' placeholder='Пароль' />
                            <Container width='100%' direction='column' align='center' padding={['20px', 0, 0, 0]}>
                                <Button big primary>
                                    Войти
                                </Button>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </>
          );
    }
}