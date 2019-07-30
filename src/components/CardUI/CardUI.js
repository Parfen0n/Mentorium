import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import Container from '../Container/Container';
import Image from '../Image/Image';

import Minimalist from '../../assets/minimalist.jpg';

import {Cover} from './CardUIStyle.js';


CardUI.propTypes = {
    children: PropTypes.node,

}

CardUI.defaultProps = {
    children: null,
}

function CardUI({
    children
}) {


  return (
    <>
        <Container width='30.5%' height='300px'>
            <Card forArticle>
                <Image forArticle src={Minimalist} height='100px'/>
                <Cover>Что такое профориентация?</Cover>
            </Card>
        </Container>
    </>
  );
}

export default CardUI;