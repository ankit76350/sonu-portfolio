import React from 'react'
import './Hero.css'
import B210066EC_Sonu_Kumar_Bhagat from '../../assets/resume/Sonu-Kumar-Bhagat-B210066EC.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import About from '../About/About'
import MyWork from '../MyWork/MyWork'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Hero = () => {
    return (
        <>
            <div id='home' className="hero">
                <img src='./assets/myProfile/sonu-pic1.png' alt="Sonu Kumar Bhagat" />
                <h1> <span>I'm Sonu Kumar Bhagat</span> Developer & Machine Learning Enthusiast.</h1>
                <p>
                    I'm a B.Tech student at NIT Sikkim with a strong foundation in both frontend and backend technologies. I specialize in building dynamic and interactive web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and have a keen interest in machine learning and data science.
                </p>
                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-link' offset={50} href='#contact'>
                            Connect With Me
                        </AnchorLink>
                    </div>
                    <a href={B210066EC_Sonu_Kumar_Bhagat} className="hero-resume" target='_blank' >My Resume</a>
                </div>
            </div>

            <About />
            <MyWork />
            <Contact />
        </>
    )
}

export default Hero
