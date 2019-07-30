import styled from 'styled-components'

const CardStyle = styled.div`
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    border-radius: 30px;
    padding: 7px;
    width: 100%;

    ${props => props.forArticle &&
    `
        padding: 0px;
        z-index: -2;
        
    `
    }
`

export default CardStyle;
