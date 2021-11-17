import styled, { keyframes } from 'styled-components'

export const HeroContainer = styled.div `
    background: #252323;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`; 

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #13141c;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 900px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-right: 328px;
    margin-top: 50px;

    @media screen and (max-width: 1080px) {
        margin-right: 0;
        align-items: center;
    };

    @media screen and (max-width: 480px) {
        margin-right: 0;
        align-items: center;
    };
`

export const HeroStyle = styled.span`
    color: #f94001;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 50px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 35px
    }

    @media screen and (max width: 480px){
        font-size: 35px;
    }
`

export const HeroP = styled.p`
    margin-top: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    };

    @media screen and (max-width: 480px) {
        font-size: 15px;
    };
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    margin-right: 445px;
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (max-width: 1080px) {
        margin-right: 60px;
        align-items: start;
    };
`

export const Box = styled.div`
        display: flex;
        z-index: 10;

        &>*:nth-child(1){
            animation-delay: 0.2s;
        }
        &>*:nth-child(2){
            animation-delay: 0.3s;
        }
        &>*:nth-child(3){
            animation-delay: 0.4s;
        }
        &>*:nth-child(4){
            animation-delay: 0.5s;
        }
        &>*:nth-child(5){
            animation-delay: 0.6s;
        }
        &>*:nth-child(6){
            animation-delay: 0.7s;
        }
`

export const play = keyframes`
        0% {
            transform: scaleY(1);
            backfround: #f94001;
        }
        25% {
            transform: scaleY(2);
            background: #f93f01b9;
        }
        50% {
            transform: scaleY(1);
            background: #f93f017a;
        }
        75% {
            transform: scaleY(2);
            background: #f93f013b;
        }
        100% {
            transform: scaleY(1);
            background: #f93f0100;
        }
        `

export const Line = styled.span`
        background: #f93f0100;
        border: none;
        border-radius: 1px;
        animation: ${play} 1s ease infinite;
        animation-play-state: ${props => props.click ? 'running' : 'paused'};
        height: 2.7rem;
        width: 5px;
        margin: 4px;

        @media screen and (max-width: 768px) {
            height: 1.5rem;
        }
`
