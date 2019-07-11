import React, { Component } from 'react';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Image from '../../components/Image/Image';
import Link from '../../components/Link/Link';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';




import BuildingImg from '../../assets/building.png'
import ClockImg from '../../assets/clock.png'
import GoalImg from '../../assets/goal.png'
import SignUpImg from '../../assets/sign-up.png'






export default class Home extends Component {

    render () {
        return (
            <>
                <BackgroundBlock top={600} left={-200} lightBlue/>
                <BackgroundBlock top={-800} left={800}/>
                <Header />
                <Container direction='column' margin={['12%', 0, 0, '50%']}>
                    <Text bold nowrap inverted large>Мы поможем найти твой ВУЗ мечты</Text>
                    <Container margin={['10px', '0', '0', '0']} width='650px'>
                        <Text inverted big>
                            Уникальный метод профориентации поможет вам точно определить ваше направаление
                        </Text>
                    </Container>
                    <Container margin={['10px', '0', '0', '0']}>
                        <Button primary>
                            Выбрать профессию
                        </Button>
                        <Button>
                            Выбрать ВУЗ
                        </Button>
                    </Container>
                </Container>
                <Container justifyContent='space-around' padding={['500px', '100px', '50px', '100px']}>
                    <Container height='600px' width='30%'>
                        <Card>
                            <Container height='600px' width='100%'>

                            </Container>
                        </Card>
                    </Container>
                    <Container height='600px' width='30%'>
                        <Card>
                            <Container height='600px' width='100%'>

                            </Container>
                        </Card>
                    </Container>
                    <Container height='600px' width='30%'>
                        <Card>
                            <Container height='600px' width='100%'>

                            </Container>
                        </Card>
                    </Container>
                </Container>
                <Container justifyContent='space-around' padding={['300px', '100px', '50px', '100px']}>
                        <Card>
                            <Container direction='column' padding={['30px', '30px', '30px', '30px']}>
                                <Container justifyContent='center'>
                                    <Text big bold>Чем профориентация в Mentorium лучше?</Text>
                                </Container>
                                <Container  margin={['30px', '0', '0', '0']} direction='row' justifyContent='space-around'>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image size='150px' src={GoalImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Высокая точность и глубина
                                            </Text>
                                        </Container>
                                        <Container width='65%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Экзистенциальный подход в выборе профессии и научный инструментарий психологической диагностики
                                            </Text>
                                        </Container>
                                    </Container>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image size='150px' src={ClockImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Любое удобное время для вас
                                            </Text>
                                        </Container>
                                        <Container width='65%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Персональный подход для каждого пользователя при выборе времени консультации
                                            </Text>
                                        </Container>
                                    </Container>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image size='150px' src={BuildingImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Большой каталог ВУЗов
                                            </Text>
                                        </Container>
                                        <Container width='65%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Большой список ВУЗов с подробной информацией, где Вы смодеже найти подходящий для себя
                                           </Text>
                                        </Container>
                                    </Container>
                                </Container>
                            </Container>
                        </Card>
                </Container>
                <BackgroundBlock top={2900} left={1000} lightBlue/>
                <BackgroundBlock top={3600} left={-600}/>
                <Container justifyContent='space-between' padding={['300px', '100px', '50px', '100px']}>
                    <Container width='50%'>
                        <Image size='100%' src={SignUpImg} />
                    </Container>
                    <Container width='50%'>
                        <Container width='80%'>
                            <Card>
                                <Container margin={['30px', 0, 0, 0]} direction='column' align='center'>
                                    <Text large bold>
                                        Присоединяйтесь!
                                    </Text>
                                    <Container width='40%' height='30px'>
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

                            </Card>
                        </Container>
                    </Container>
                </Container>
                <Container justifyContent='space-around' padding={['300px', '100px', '50px', '100px']}>
                        <Card>
                            <Container direction='column' padding={['30px', '30px', '30px', '30px']}>
                                <Container justifyContent='center'>
                                    <Text big bold>Живая профориентация лучше теста?</Text>
                                </Container>
                                <Container height='350px' margin={['30px', '0', '0', '0']} direction='row' justifyContent='space-around'>

                                </Container>
                            </Container>
                        </Card>
                </Container>
                <Container width='50%' justifyContent='space-around' padding={['300px', '100px', '50px', '100px']}>
                        <Card>
                            <Container height='500px' direction='column' padding={['30px', '30px', '30px', '30px']}>
                                
                            </Container>
                        </Card>
                </Container>
                <Container justifyContent='space-around' padding={['500px', '100px', '500px', '100px']}>
                    <Text big bold>
                        Читайте также
                    </Text>
                </Container>
                <Footer />
            </>
          );
    }
}