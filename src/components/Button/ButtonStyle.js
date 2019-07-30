import styled from 'styled-components'

const ButtonStyle = styled.div`
    height: 37px;    
    padding: 0 20px 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;    
    border-radius: 35px;
    font-size: 18px;
    justify-content: center;
    min-width: 50px;
    max-width: 300px;
    cursor: pointer;
    
    will-change: transform, box-shadow;
    transition: all 0.5s;

    :hover {
        box-shadow: 0px 4px 10px -8px rgba(0,0,0,0.75);
        transform: translateY(-3px);
         transition: all 0.5s;
    }

    ${props => props.primary &&
        `
        background-color: #FFB42E;
        color: white;
        margin-right: 0;
        `
    }

    ${props => props.secondary &&
        `
        background-color: #224FB3;
        color: #fff;
        margin-left: 20px;
        `
    }

    ${props => props.big &&
        `
        min-width: 400px;
        height: 50px;
        `
    }
`

export default ButtonStyle;
