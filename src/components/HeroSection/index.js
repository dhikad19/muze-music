import React, { useRef, useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,
         HeroBg, 
         VideoBg, 
         HeroContent, 
         HeroH1,
         HeroStyle, 
         HeroP, 
         HeroBtnWrapper,
         Box,
         Line
         } from './HeroComponents'
import { Button } from '../ButtonElement'
import music from '../../music/music1.mp3'

const HeroSection = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Experience Your Music Like Never Before with Mu<HeroStyle>ze</HeroStyle></HeroH1>
                <HeroP>
                    Imagine a music library at your back and call more than 50.000 songs
                    and over 10.000 unique radio station all for you to explore.
                    Play use and download our high fidelity audio material at your 
                    hearts's content. After all, thats what our royalty-free services is all about. 
                    Allowing you to experience music at its purest-no hustle, no guilt, easy like Sunday morning.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    onClick={() => handleClick()} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    click={click}
                    >
                        Get Started!
                        <audio src={music} ref={ref} loop />
                    </Button>
                    <Box onClick={() => handleClick()}>
                        <Line click={click} />
                        <Line click={click} />
                        <Line click={click} />
                        <Line click={click} />
                        <Line click={click} />
                        <Line click={click} />
                    </Box>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
