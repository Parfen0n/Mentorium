import styled from 'styled-components'

const InputStyle = styled.input`
    margin: 7px;
    border: 1px solid #34383d;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius: 30px;
    width: 100%;
    padding: 17px;
    font-family: 'Comfortaa', sans-serif;
    font-size: 18px;
    outline: none;
    transition: all 0.5s;

    :focus {
        border: 1px solid  #FFB42E;
        box-shadow: 0px 0px 20px -15px rgba(255,180,46,1);

    }
`

export default InputStyle;
