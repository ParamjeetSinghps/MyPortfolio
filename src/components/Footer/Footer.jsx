import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg' ;
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="footer" />
                <p>I am web and mobile app developer from India with hands-on experience </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user" />
                    <input type="email" placeholder='Enter your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">c 2025 Paramjeet Singh . All Rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
