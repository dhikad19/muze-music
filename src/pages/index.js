import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import DataSection from '../components/DataSection'
import { dataObjectOne, dataObjectTwo, dataObjectThree } from '../components/Data'
import SignupSection from '../components/SignupSection'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return  (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...dataObjectOne} />
            <DataSection {...dataObjectTwo} />
            <Services />
            <SignupSection {...dataObjectThree} />
            <Footer />
        </>
    )
}

export default Home