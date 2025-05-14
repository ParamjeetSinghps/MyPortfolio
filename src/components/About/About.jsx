import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>dcfvgbhnj mctfgvy bhunijmkf vgbhn jfghnjm kgbyh njmkbgbhnjmkh jnk</p>
                    <p>tfcvgybhnj hbnj km,l hnjmkl, njmk,l bhnjk ghbjn fvgbhnj vgbhnj vgbhnjk gvbhnj </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS </p><hr  style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>React JS </p><hr  style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>HTML & CSS </p><hr  style={{width:'80%'}}/></div>
                    <div className="about-skill"><p>HTML & CSS </p><hr  style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>HTML & CSS </p><hr  style={{width:'70%'}}/></div>
                </div>
            </div>
        </div>

    <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Completed Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>Clients</p>
        </div>       
        </div>  
    </div>
  )
}

export default About
