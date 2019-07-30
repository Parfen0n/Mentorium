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




import BuildingImg from '../../assets/done-5.png'
import ClockImg from '../../assets/pale-waiting.png'
import GoalImg from '../../assets/success-3.png'
import SignUpImg from '../../assets/sign-up.png'
import Welcome from '../../assets/welcome.png'
import Proforientatior from '../../assets/marginalia-location-access.png'
import NavigationSupport from '../../assets/marginalia-navigation-support.png'
import Done from '../../assets/marginalia-done.png'

import Divider from '../../components/Divider/Divider';
import CardUI from '../../components/CardUI/CardUI';






export default class Home extends Component {

    render () {
        return (
            <>
                <BackgroundBlock top={-100} left={-200} lightBlue/>
                <BackgroundBlock top={-1100} left={1000}/>
                <Header />
                <Container direction='column' margin={['12%', 0, 0, '50%']}>
                    <Text bold nowrap inverted large>Ваш путь к успешной карьере</Text>
                    <Container margin={['10px', '0', '0', '0']} width='650px'>
                        <Text inverted big>
                            Уникальный метод профориентации поможет вам точно определить ваше направаление
                        </Text>
                    </Container>
                    <Container margin={['10px', '0', '0', '0']}>
                        <Button primary>
                            Выбрать профессию
                        </Button>
                        <Button secondary>
                            Выбрать ВУЗ
                        </Button>
                    </Container>
                </Container>
                <Container justifyContent='space-around' padding={['250px', '100px', '50px', '100px']}>
                    <Container height='400px' width='30%'>
                        <Card>
                            <Container height='180px' width='100%' justifyContent='center'>
                                <Image src={Proforientatior} height='220px'/>
                            </Container>
                                <Container align='center' direction='column'>
                                    <Container margin={['15px', 0, 0, 0]}>
                                        <Text bold alignCenter>
                                            Проконсультируйтесь у профессионала
                                        </Text>
                                    </Container>

                                    <Container margin={['10px', 0, 0, 0]} width='95%'>
                                        <Text alignCenter>
                                        Пройдите комплекс профориентационных тестов и проконсультируйтесь у профессионала
                                        </Text>
                                    </Container>
                                </Container>
                        </Card>
                    </Container>
                    <Container height='400px' width='30%'>
                        <Card>
                            <Container height='180px' width='100%' justifyContent='center'>
                                <Image src={NavigationSupport} height='220px'/>
                            </Container>
                                <Container align='center' direction='column'>
                                    <Container margin={['15px', 0, 0, 0]}>
                                        <Text bold alignCenter>
                                            Узнайте больше о своей профессии
                                        </Text>
                                    </Container>

                                    <Container margin={['10px', 0, 0, 0]}>
                                        <Text alignCenter>
                                            Ознакомьтесь со всей актуальной информацией касательно вашей выбранной профессии
                                        </Text>
                                    </Container>
                                </Container>
                        </Card>
                    </Container>
                    <Container height='400px' width='30%'>
                        <Card>
                            <Container height='180px' width='100%' justifyContent='center'>
                                <Image src={Done} height='220px'/>
                            </Container>
                                <Container align='center' direction='column'>
                                    <Container margin={['15px', 0, 0, 0]} width='90%'>
                                        <Text bold alignCenter>
                                            Найдите ВУЗ который идеально подойдет для вас
                                        </Text>
                                    </Container>

                                    <Container margin={['10px', 0, 0, 0]}>
                                        <Text alignCenter>
                                            Узнайте все подробности о ВУЗе где обучают вашей выбранной специальности
                                        </Text>
                                    </Container>
                                </Container>
                        </Card>
                    </Container>
                </Container>
                <Container justifyContent='space-around' padding={['200px', '100px', '50px', '100px']}>
                        <Card>
                            <Container direction='column' padding={['30px', '30px', '30px', '30px']}>
                                <Container justifyContent='center'>
                                    <Text big bold>Чем профориентация в Mentorium лучше?</Text>
                                </Container>
                                <Container  margin={['30px', '0', '30px', '0']} direction='row' justifyContent='space-around'>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image height='200px' src={GoalImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Высокая точность и глубина
                                            </Text>
                                        </Container>
                                        <Container width='80%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Экзистенциальный подход в выборе профессии и научный инструментарий психологической диагностики
                                            </Text>
                                        </Container>
                                    </Container>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image height='200px' src={ClockImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Любое удобное время для вас
                                            </Text>
                                        </Container>
                                        <Container width='80%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Персональный подход для каждого пользователя при выборе времени консультации
                                            </Text>
                                        </Container>
                                    </Container>
                                    <Container align='center' direction='column' height='350px'>
                                        <Image height='200px' src={BuildingImg} />
                                        <Container margin={['15px', 0, 0, 0]}>
                                            <Text bold>
                                                Большой каталог ВУЗов
                                            </Text>
                                        </Container>
                                        <Container width='80%' margin={['10px', 0, 0, 0]}>
                                            <Text alignCenter>
                                                Большой список ВУЗов с подробной информацией, где Вы смодеже найти подходящий для себя
                                           </Text>
                                        </Container>
                                    </Container>
                                </Container>
                            </Container>
                        </Card>
                </Container>
                <Container padding={['100px', '100px', '50px', '100px']}>
                    <Container width='50%' justifyContent='center'>
                        <Image height='550px' src={SignUpImg} />
                    </Container>
                    <Container width='50%'>
                        <Container width='90%' height='470px'>
                            <Card>
                                <Container margin={['30px', 0, 0, 0]} direction='column' align='center'>
                                    <Text large bold>
                                        Присоединяйтесь!
                                    </Text>
                                    <Container width='40%' height='30px' justifyContent='center'>
                                        <Text nowrap secondary>
                                            Уже есть аккаунт?
                                        </Text>
                                        <Link>
                                            Войти
                                        </Link>
                                    </Container>
                                    <Container direction='column' padding={['20px', '10%', 0, '10%']}>
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
                <BackgroundBlock top={1850} left={1000} lightBlue/>
                <BackgroundBlock top={2600} left={-1000}/>
                <Container justifyContent='space-around' padding={['100px', '100px', '50px', '100px']}>
                        <Card>
                            <Container direction='column' padding={['30px', '30px', '30px', '30px']}>
                                <Container justifyContent='center'>
                                    <Text big bold>5 причин пройти профориентацию именно сейчас</Text>
                                </Container>
                                <Container margin={['30px', '0', '0', '0']} position='column'>
                                <Container width='50%'>
                                        <Text>
                                            1. Профориентация поможет определить свои реальные склонности и предпочтения
                                        </Text>
                                        </Container>
                                        <Container width='50%'>
                                        <Text>
                                            2. Профориентация отделит хобби от того, чем хочется заниматься каждый день профессионально
                                        </Text>
                                        </Container>
                                </Container>
                                <Container margin={['30px', '0', '0', '0']} position='column'>
                                        <Container width='50%'>
                                        <Text>
                                            3. Профориентация поможет понять как зарабатывать занимаясь любимым делом
                                        </Text>
                                        </Container>
                                        <Container width='50%'>
                                        <Text>
                                            4. Пройдя профориентацию можно определить точную профессию
                                        </Text>
                                        </Container>
                                    
                                </Container>
                                <Container margin={['30px', '0', '30px', '0']} position='column'>
                                        <Container width='50%'>
                                        <Text>
                                            5. Профориентация поможет понять, где можно научиться выбранной профессии
                                        </Text>
                                        </Container>                                    
                                </Container>
                                <Container width='70%'>
                                    <Divider/>
                                </Container>
                                <Container margin={['30px', '0', '0', '0']} position='row'>
                                        <Container width='50%' position='column'>
                                        <Text bold>
                                            Интересно? Тогда, предлагаем Вам пройти комплекс профориентационных тестов
                                        </Text>
                                        </Container>
                                        <Container margin={['5px', 0, 0, 0]} width='20%' position='column' justifyContent='flex-end'>
                                        <Button primary>
                                            Пройти тест
                                        </Button>
                                        </Container>                                      
                                </Container>
                            </Container>                            
                        </Card>
                </Container>
                <Container margin={['-400px', 0, 0, '710px']}>
                <Image src={Welcome} height='550px'/>
                </Container>

                <Container justifyContent='space-around' padding={['0px', '100px', '50px', '100px']}>
                        <Card>
                            <Container direction='column' padding={['30px', '30px', '30px', '30px']}>
                                <Container justifyContent='center'>
                                    <Text big bold>5 причин пройти профориентацию именно сейчас</Text>
                                </Container>
                                <Container margin={['30px', '0', '30px', '0']} position='column'>
                                    <Container width='100%'>
                                        <Text>
                                            Определение жизненного пути при помощи профориентационного теста - достаточно точный инструмент для большинства. Но каждый человек уникален по своему и требует персонального подхода. По голосу и манере общения с человеком, можно определить его психотип, что поможет сделать более точное заключение.
                                        </Text>
                                    </Container>
                                </Container>
                                
                                
                                <Container width='100%'>
                                    <Divider/>
                                </Container>
                                <Container margin={['30px', '0', '0', '0']}>
                                        <Container width='80%'>
                                        <Text bold>
                                            Не упустите совй шанс проконсультироваться у профессионала!
                                        </Text>
                                        </Container>
                                        <Container width='20%' justifyContent='flex-end'>
                                        <Button primary>
                                            Записаться
                                        </Button>
                                        </Container>                                      
                                </Container>
                            </Container>                            
                        </Card>
                </Container>



                <Container justifyContent='center'>
                    <Text big inverted>
                        Читайте также
                    </Text>
                </Container>
                <Container padding={['100px', '100px', '800px', '100px']} justifyContent='space-between'>
                    <CardUI/>
                    <CardUI/>
                    <CardUI/>
                </Container>
                <Footer />
            </>
          );
    }
}