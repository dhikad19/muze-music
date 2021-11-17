import React, { useState, useEffect } from 'react';
import { Nav,
         NavbarContainer, 
         NavLogo,
         MobileIcon, 
         NavMenu, 
         NavItem, 
         NavLinks,
         NavBtn,
         NavBtnLink } from './NavbarComponents';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Mu<span>ze</span>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='discover'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='signup'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-70}
                            >Listen</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin'>Account</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};
  
export default Navbar
