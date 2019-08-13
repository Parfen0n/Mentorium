import styled from 'styled-components'

export const HeaderStyle = styled.div`
    display: grid;
    max-height: 60px;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    padding: 0 100px 0 100px;
    align-items: center;
    
    @media screen and (max-width: 970px) {
        padding: 0 50px 0 50px;
    }

    @media screen and (max-width: 850px) {
        padding: 0 20px 0 20px;
    }

    @media screen and (max-width: 810px) {
        padding: 0;
    }

    @media screen and (max-width: 795px) {
        padding: 0;
        grid-template-columns: 50px 1fr 50px;
    }
`

export const HeaderLogoStyle = styled.img`
    max-height: 60px;

    
`

export const HeaderItemsStyle = styled.div`
    display: flex;
    justify-content: end;

    @media screen and (max-width: 795px) {
        display: grid;
        padding: 10px 0 10px 0;
        grid-column: 1 / 3;
        grid-row: 2;
        justify-content: start;
        text-align: left;
        background: #fff;
        border-radius: 0 0 20px 20px;
        box-shadow: 0px 8px 10px -8px rgba(0,0,0,0.75);
    }
`

export const HeaderLogoItems = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    justify-items: start;
    background: transparent;

    @media screen and (max-width: 795px) {
        justify-content: center;
    }

`

export const HeaderActiveLinksStyle = styled.div`

    @media screen and (max-width: 795px) {
        display: none;
    }
`

export const Hello = styled.div`

    @media screen and (max-width: 795px) {
        background: red;
        height: 200px;
        width: 100%;
    }
`