import styled from 'styled-components'

const ButtonStyle = styled.div`
    height: 37px;
    background-color: #224FB3;
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    color: #fff;
    border-radius: 35px;
    font-size: 18px;
    justify-content: center;
    min-width: 50px;
    max-width: 300px;
    cursor: pointer;
    margin: 8px;
    will-change: transform, box-shadow;
    transition: all 0.5s;

    :hover {
        box-shadow: 0px 4px 10px -8px rgba(0,0,0,0.75);
        transform: scale(1.03);
        -webkit-transform: scale(1.03);
         -ms-transform: scale(1.03);
         transition: all 0.5s;
    }

    ${props => props.primary &&
        `
        background-color: #FFB42E;
        color: white;
        `
    }
`

export default ButtonStyle;