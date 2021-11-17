import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: linear-gradient(
        110deg,
        rgb(255, 123, 0) 0%,
        rgb(255, 115, 0) 100%
    );
`;

export const TextSpan = styled(Link)`
    text-decoration: underline;
    cursor: pointer;
    color: #f94001;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        height: 80%;
        margin-top: 40px;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    transition: 0.5s ease-out;

    span{
        color: #000;
        transition: 0.5s ease-out;
    }

    &:hover{ 
        color: #000; 
        transition: 0.5s ease-out;
    span{
        color: #fff;
    }
    }

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 480px) {
        padding: 10px;
        margin-top: 40px;
    }
`

export const Form = styled.div`
    background: #000;
    max-width: 500px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 45px 72px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 768px) {
        padding: 35px 42px;
        margin-top: 20px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    text-align: center;

    span {
        font-size: 16px;
    }
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 10px 16px;
    margin-bottom: 12px;
    border: none;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        padding: 10px 16px;
        margin-top: -5px;
        margin-bottom: 12px;
    }
`

export const FormButton = styled.button`
    background: #f94001;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    align-items: center;
    margin-top: 20px;
    border: none;
    border-radius: 100px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    justify-content: inherit;

    @media screen and (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
    }
    
    &:hover {
        background: #f96209;
        transition: 0.5s ease-in-out;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 20px;
    color: #fff;
    font-size: 14px;
    margin-bottom: -10px;

    span {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Text1 = styled.span`
    text-align: center;
    margin-top: 30px;
    color: #fff;
    font-size: 14px;
    margin-bottom: -10px;

    span {
        text-decoration: underline;
        cursor: pointer;
    }
`;