import styled from 'styled-components'

const ImageStyle = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
    padding: 5px;
    border-radius: ${props => props.borderRadius};
    object-fit: cover;
`

export default ImageStyle;
