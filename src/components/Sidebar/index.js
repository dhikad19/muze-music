import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute
} from './SidebarComponents'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to="about" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        About
                    </SidebarLink>
                    <SidebarLink 
                    to="discover" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Discover
                    </SidebarLink>
                    <SidebarLink 
                    to="services" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Services
                    </SidebarLink>
                    <SidebarLink 
                    to="signup" 
                    onClick={toggle}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-70}
                    >
                        Listen
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>Account</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
