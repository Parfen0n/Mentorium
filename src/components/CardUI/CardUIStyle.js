import styled from 'styled-components'

export const Cover = styled.div`
    margin-top: -100px;
    z-index: 100;
    font-size: 18px;
    color:  #fcfafa;
    line-height: 27px;
    padding: 20px;

    cursor: pointer
    will-change: transform, box-shadow;
    transition: all 0.5s;

    :hover {
        box-shadow: 0px 4px 10px -8px rgba(0,0,0,0.75);
        transform: translateY(-3px);
         transition: all 0.5s;
    }

    
`