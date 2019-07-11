import React, { Component } from 'react';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Container from '../../components/Container/Container';
import Text from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';


export default class SignUp extends Component {

    render () {
        return (
            <>
                <BackgroundBlock width='950px' rotate={45} top={-50} left={-600}/>
                <Container margin={['10%', 0, 0, 0]} align='center'>
                    <Container width='50%' direction='column' padding={['50px', '10%', 0, '10%']}>
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
                        <Container width='100%' direction='column' padding={['50px', '10%', 0, '10%']}>
                            <Input type='text' placeholder='Имя' />
                            <Input type='password' placeholder='Пароль' />
                            <Input type='text' placeholder='E-mail' />
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