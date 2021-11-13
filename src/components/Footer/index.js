import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa'
import {FooterContainer, 
        FooterLinks, 
        FooterWrap, 
        FooterLinksItems, 
        FooterLinksWrapper, 
        FooterLinksContainer, 
        FooterLinksTitle, 
        SocialIconsLink, 
        SocialIcons,
        SocialLogo,
        SocialMedia,
        SocialMediaWrap, 
        WebsiteRight,
        FooterStyle
        } from './FooterComponents'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                                <FooterLinks to="/">How it Works</FooterLinks>
                                <FooterLinks to="/">Testimonials</FooterLinks>
                                <FooterLinks to="/">Careers</FooterLinks>
                                <FooterLinks to="/">Invest with Me</FooterLinks>
                                <FooterLinks to="/">Term of Services</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Music with Us</FooterLinksTitle>
                                <FooterLinks to="/">Sponsor Link</FooterLinks>
                                <FooterLinks to="/">Artist Name</FooterLinks>
                                <FooterLinks to="/">Songs Title</FooterLinks>
                                <FooterLinks to="/">Contract</FooterLinks>
                                <FooterLinks to="/">Learn More</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Link Manage</FooterLinksTitle>
                                <FooterLinks to="/">Producers Name</FooterLinks>
                                <FooterLinks to="/">Studio Location</FooterLinks>
                                <FooterLinks to="/">Invites Artist</FooterLinks>
                                <FooterLinks to="/">Guess Star</FooterLinks>
                                <FooterLinks to="/">Singer Name</FooterLinks>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Price List</FooterLinksTitle>
                                <FooterLinks to="/">In Month</FooterLinks>
                                <FooterLinks to="/">In Year</FooterLinks>
                                <FooterLinks to="/">Technichaly</FooterLinks>
                                <FooterLinks to="/">Join With Us</FooterLinks>
                                <FooterLinks to="/">View More</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Mu<span>ze</span>
                        </SocialLogo>
                        <WebsiteRight><FooterStyle>dika911</FooterStyle> © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcons>
                            <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconsLink>
                            <SocialIconsLink href="/" target="_blank" aria-label="Pinterest">
                                <FaPinterest />
                            </SocialIconsLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
