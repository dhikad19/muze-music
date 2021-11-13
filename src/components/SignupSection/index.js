import React from 'react'
import { InfoContainer,
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2,
         TextWrapper,
         Heading,
         Subtitle,
         ImgWrap, 
         Img
        } from './SignupComponents'
import image3 from '../../images/svg-3.svg'

const SignupSection = ({lightBg, id, imgStart, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper> 
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={image3} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default SignupSection
