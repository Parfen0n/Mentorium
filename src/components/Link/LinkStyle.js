import styled from 'styled-components'

const LinkStyle = styled.p`
    color: #4A83FF;
    font-size: 18px;
    line-height: 27px;
    margin-left: 3px;
    :hover {
        border-bottom: 2px solid #4A83FF;
    }

    ${props => props.big &&
        `
        font-size: 22px;
        line-height: 33px;
        `
    }

    ${props => props.small &&
        `
        font-size: 14px;
        line-height: 21px;
        `
    }

    ${props => props.large &&
        `
        font-size: 34px;
        line-height: 51px;
        `
    }

    ${props => props.primary &&
        `
        color: #fff;
        display: inline;
        background-color: #224FB3;
        padding: 7px 13px 7px 13px;
        align-items: center;
        border-radius: 35px;
        min-width: 50px;
        max-width: 300px;

        :hover {
            border-bottom: none;
        }
        `
    }

    ${props => props.inverted &&
        `
        color:  #fff;
        :hover {
            border-bottom: 2px solid #fff;
        }
        `
    }

    ${props => props.nowrap &&
        `
        white-space: nowrap;
        `
    }

    ${props => props.uppercase &&
        `
            text-transform: uppercase;
        `
    }

    ${props => props.alignCenter &&
        `
            text-align: center;
        `
    }

`

export default LinkStyle;
