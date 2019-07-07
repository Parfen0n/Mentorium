import React, { Component } from 'react';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Header from '../../components/Header/Header';
import Text from '../../components/Text/Text';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';





export default class Home extends Component {

    render () {
        return (
            <>
                <BackgroundBlock top={500} left={-80} lightBlue/>
                <BackgroundBlock top={-300} left={900}/>
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
                        <Card>
                            <Container height='500px' width='350px'>

                            </Container>
                        </Card>
                        <Card>
                            <Container height='500px' width='350px'>

                            </Container>
                        </Card>
                        <Card>
                            <Container height='500px' width='350px'>
    
                            </Container>
                        </Card>
                </Container>
            </>
          );
    }
}