import styled from 'styled-components'

const ContainerStyle = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.align};
    width: ${props => props.width ? `${props.width}` : 'auto'};
    height: ${props => props.height ? `${props.height}` : 'auto'}
    ${props => props.margin &&
        `
        margin: ${props.margin[0]} ${props.margin[1]} ${props.margin[2]} ${props.margin[3]}
        ` 
    }

    ${props => props.padding &&
        `
        padding: ${props.padding[0]} ${props.padding[1]} ${props.padding[2]} ${props.padding[3]}
        ` 
    }
`

export default ContainerStyle;
