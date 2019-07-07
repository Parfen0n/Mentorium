import styled from 'styled-components'

const BackgroundBlockStyle = styled.div`
    width: 1300px;
    height: 2500px;
    background-color: #4A83FF;
    border-radius: 300px;
    transform: rotate(60deg);
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    position: absolute;
    z-index: -50;
    ${props => props.lightBlue &&
        `
        background-color: #6395FF;
        `
    }
`

export default BackgroundBlockStyle;
