import styled from 'styled-components'

const ImageStyle = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 5px;
    border-radius: ${props => props.borderRadius};
    object-fit: cover;
    padding: 0;
    ${props => props.withFilter &&
        `
        filter: brightness(35%);
        `
    }
    padding: 0 auto;
`

export default ImageStyle;
