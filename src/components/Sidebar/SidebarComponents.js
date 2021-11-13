import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll} from 'react-scroll'
import { Link as LinkRoute } from "react-router-dom";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000000f5;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #f94001;

    &:hover {
        color: #d09872;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div `
    color: #e2e4d8;
`;

export const SidebarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #e2e4d8;
    cursor: pointer;

    &:hover {
        color: #d09872;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div `
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRoute) `
    border-radius: 50px;
    background: #f94001;
    color: #fff;
    white-space: nowrap;
    padding: 16px 64px;
    outline: none;
    border: none;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #d09872;
        color: #e2e4d8;
    }
`;