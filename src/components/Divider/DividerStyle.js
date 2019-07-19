import styled from 'styled-components'

const DividerStyle = styled.div`
    width: 100%;
    height: 3px;
    border-radius: 5px;
    background-color: #b5bcc7;
    margin: 5px;
    
    ${props => props.vertical &&
        `
            height: 80%;
            width: 3px;
        `
    }
    
`

export default DividerStyle;
