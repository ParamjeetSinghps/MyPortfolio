import React, { useState, useEffect } from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const [role, setRole] = useState('Web Developer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  
  const roles = [
    'Web Developer',
    'Frontend Developer',
    'Web Designer',
    'Content Creator'
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 75 : 150; // Faster when deleting
    const timer = setTimeout(() => {
      const currentRole = roles[index];
      
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setIsDeleting(true);
          setTimeout(() => {}, 2000); // Pause at the end
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <div id='home' className='hero'>
      <img src={profile_img}  alt="profile" style={{borderRadius:"100%" , height:"300px" , width:"300px"}}/>
      <h1>
        Hi, I'm <span>Paramjeet Singh</span>
        <br />
        <span className="dynamic-text">{text}</span>
        <span className="cursor">|</span>
      </h1>
      <p>I specialize in creating visually appealing and user-friendly websites and mobile apps.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a className='download-link' href="src\assets\ParamjeetSD(1).pdf" download><div className="hero-resume">Download Resume</div></a>
      </div>
    </div>
  )
}

export default Hero
