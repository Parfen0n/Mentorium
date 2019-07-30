import React, { Component } from 'react';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';

import SignUpImage from '../../assets/sign-up.png'

import SignUpModel  from './SignUpModel.js';



export default class SignUp extends Component {

    render () {
        return (
            <>
                <BackgroundBlock lightBlue width='800px' rotate={45} top={-195} left={-800}/>
                <BackgroundBlock width='200px' rotate={45} top={40} left={550}/>
                <Container margin={[0, 0, 0, 0]} align='center'>
                    <Container width='50%' direction='column' padding={['8%', '0', 0, '0']} margin={[0, 0, 0, '-100px']}>
                        <Image height='550' src={SignUpImage} />
                    </Container>
                    <Container width='50%' align='center' direction='column' padding={['50px', '10%', 0, '10%']}>
                        <Text large bold>
                            Присоединяйтесь!
                        </Text>
                        <Container width='40%' height='30px' justifyContent='space-around'>
                                <Text nowrap secondary>
                                    Уже есть аккаунт?
                                </Text>
                                <Link>
                                    Войти
                                </Link>
                        </Container>
                        <Container direction='column' padding={['0', '10%', 0, '10%']} align='center'>
                            <Input onChange={(e) => SignUpModel.set("username", e.target.value)} type='text' placeholder='Имя' />
                            <Input onChange={(e) => SignUpModel.set("password", e.target.value)} type='password' placeholder='Пароль' />
                            <Input onChange={(e) => SignUpModel.set("email", e.target.value)}  type='text' placeholder='E-mail' />
                            <Container width='100%' direction='column' align='center' padding={['20px', 0, 0, 0]}>
                                <Button big primary>
                                    Зарегистрироваться
                                </Button>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </>
          );
    }
}