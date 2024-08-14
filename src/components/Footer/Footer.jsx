import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-top-left">
                        <div className="footer-title">
                            <h1>SonuKB</h1>
                            <img src={theme_pattern} alt="" />
                        </div>
                        {/* <img src={footer_logo} alt="" /> */}
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure natus, nisi eaque fuga corrupti consequuntur odit, inventore eligendi molestias quidem! Delectus neque doloribus saepe non architecto? Excepturi, dignissimos voluptate?</p> */}

                    </div>
                    <div className="footer-top-right">
                        <div className="footer-email-input">
                            <img src={user_icon} alt="" />
                            <input type="email" placeholder='Enter your email ' />
                        </div>
                        <div className="footer-subscribe">Subscribe</div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left"> 2024 Sonu kumar. All rights reserve</p>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                        <p>Connect with me</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
