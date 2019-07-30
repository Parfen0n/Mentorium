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

    ${props => props.withBrightFilter &&
        `
        filter: brightness(650%);
        `
    }
    padding: 0 auto;
`

export default ImageStyle;
