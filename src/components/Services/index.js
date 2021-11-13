import React from 'react';
import { ServicesContainer,
         ServicesWrapper, 
         ServicesH1, 
         ServicesH2, 
         ServicesP, 
         ServicesCard, 
         ServicesIcon,
         ServicesSubtitle,
         ServicesContent,
         PStyle } from './ServicesComponens'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesContent>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesSubtitle>We have a lot of services, three of them is Tons of music, free trial and fresh UI. 
                We have all everything you need, so don't worry to keep in touch with us.
            </ServicesSubtitle>
            </ServicesContent>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Tons of Music</ServicesH2>
                    <ServicesP>All music all along. you can access tons of music here without charges</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Free Trial</ServicesH2>
                    <ServicesP>You can access free trial for about 30 days, access all music for free</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Fresh UI</ServicesH2>
                    <ServicesP>With fresh UI. You'll never bored with Mu<PStyle>ze</PStyle>. Play now!</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
