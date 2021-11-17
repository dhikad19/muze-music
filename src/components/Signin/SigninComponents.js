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
    margin-top: 103px;
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
        margin-top: -7px;
    }
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 10px;
        margin-top: 40px;
    }
`

export const Form = styled.div`
    background: #000;
    right: 0;
    max-width: 700px;
    height: auto;
    width: 100%;
    display: grid;
    margin-left: auto;
    padding: 100% 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 768px) {
        padding: 32px 32px;
        margin-top: 20px;
    }
`

export const FormH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: left;
    margin-top: -150px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: 0;
        text-align: center;
        margin-bottom: 10px;
        
    }

` 
export const FormH2 = styled.h2`
    margin-bottom: 80px;
    margin-top: -60px;
    color: #fff;
    font-size: 30px;
    text-align: left;
    font-weight: bold;

    span {
        color: #f94001;
    }

    @media screen and (max-width: 768px) {
        font-size: 15px;
        margin-top: 0;
        margin-bottom: 40px;
        text-align: center;
        
    }
`

export const FormButton = styled(Link)`
    border-radius: 50px;
    background: #f94001;
    white-space: nowrap;
    padding: 20px 10px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-bottom: 20px;
    font-weight: bold;

        &:hover {
            transitiion: all 0.2s ease-in-out;
            background: #fff;
            color: #f94001;
        }

        @media screen and (max-width: 480px) {
            padding: 10px 5px;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-weight: normal;
        }

        @media screen and (max-width: 768px) {
            padding: 15px 5px;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-weight: normal;
        }
`
export const FormButtonSec = styled(Link)`
    border-radius: 50px;
    font-weight: bold;
    background: #000;
    white-space: nowrap;
    padding: 20px 10px;
    color: #f94001;
    font-size: 24px;
    text-align: center;
    outline: none;
    border: 10;
    border-color: #f94001;
    border-style: solid;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

        &:hover {
            transitiion: all 0.2s ease-in-out;
            background: #f94001;
            color: #fff;
        }

        @media screen and (max-width: 480px) {
            padding: 15px 5px;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-weight: normal;
        }

        @media screen and (max-width: 768px) {
            padding: 10px 5px;
            font-size: 20px;
            text-align: center;
            align-items: center;
            font-weight: normal;
        }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;

    span {
        text-decoration: underline;
        cursor: pointer;
    }
`;