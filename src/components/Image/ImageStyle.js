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

    ${props => props.forArticle &&
        `
        height:100%;
        width:100%;
        position: relative;
        border-radius: 30px;
        top:0;
        left:0;
        z-index:-1;
        transition: all 0.4s ease-out;
        filter: brightness(80%);
        `
    }

    padding: 0 auto;
`

export default ImageStyle;
