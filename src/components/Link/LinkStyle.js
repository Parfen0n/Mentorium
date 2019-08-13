import styled from 'styled-components'

const LinkStyle = styled.p`
    color: #4A83FF;
    font-size: 18px;
    line-height: 27px;
    margin-left: 20px;
    :hover {
        // border-bottom: ${props => !props.withoutLine ? `2px solid #4A83FF` : 'none'}
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
        border-radius: 25px;
        min-width: 50px;
        max-width: 300px;

        :hover {
            border-bottom: none;
        }

        @media screen and (max-width: 795px) {
            text-align: left;
            margin-left: 20px;
            :hover {
                border-bottom: none;
            }
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

    ${props => props.navBar &&
        `
        color: #fff;
        border-radius: 25px;
        padding: 7px 13px 7px 13px;
        white-space: nowrap;
        display: inline;
        transition: all 0.3s;
        :hover {
            background: rgba(225, 225, 225, 0.7);
        }
        @media screen and (max-width: 795px) {
            color: #000;
            text-align: center;
            margin: 5px;
            
        }
        
        `
    }

    ${props => props.inverted &&
        `
        padding: 5px 11px 5px 11px;
        border: 2px solid #fff;

        @media screen and (max-width: 795px) {
            
            

            padding: 5px 11px 5px 11px;
            border: 2px solid #224FB3;
        }
        `
    }


`

export default LinkStyle;
