import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 2px;
    font-weight: 400;
    background: ${({primary}) => (primary ? '#f94001' : '#d09872')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 50px' : '12px 30px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: inherit;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin-right: 3px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#f96209' : '#e2e4d8')};
    };
`