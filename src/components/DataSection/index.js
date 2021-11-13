import React from 'react'
import { InfoContainer,
         InfoWrapper, 
         InfoRow, 
         Column1, 
         Column2,
         TextWrapper,
         TopLine,
         Heading,
         Subtitle,
         ImgWrap, 
         Img
        } from '../InfoSection/InfoComponents'
import image2 from '../../images/svg-2.svg'

const DataSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper> 
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={image2} alt={alt} />
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DataSection
