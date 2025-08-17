import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.png';
// Import skill logos
import reactLogo from '../../assets/react.png';
import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import viteLogo from '../../assets/vite.png';
import djangoLogo from '../../assets/django.png';
import javaLogo from '../../assets/java.png';
import javascriptLogo from '../../assets/javascript.png';
import pythonLogo from '../../assets/python.png';
import nodeLogo from '../../assets/node.png';
import mysqlLogo from '../../assets/mysql.png';
import figmaLogo from '../../assets/figma.png';
import flutterLogo from '../../assets/flutter.png';
import gitLogo from '../../assets/git.png';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="profile" className='profile-img' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate Full Stack Developer with expertise in building modern web applications. My journey in software development has equipped me with a strong foundation in both front-end and back-end technologies, allowing me to create seamless, user-friendly solutions.</p>
                    <p>I specialize in developing responsive, scalable applications using cutting-edge technologies. My approach combines technical excellence with creative problem-solving to deliver high-quality software solutions that meet business objectives.</p>
                </div>
                <div className="about-skills">
                    <div className="skill-item">
                        <img src={reactLogo} alt="React" />
                        <p>React</p>
                    </div>
                    <div className="skill-item">
                        <img src={htmlLogo} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-item">
                        <img src={cssLogo} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-item">
                        <img src={bootstrapLogo} alt="Bootstrap" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill-item">
                        <img src={viteLogo} alt="Vite" />
                        <p>Vite</p>
                    </div>
                    <div className="skill-item">
                        <img src={djangoLogo} alt="Django" />
                        <p>Django</p>
                    </div>
                    <div className="skill-item">
                        <img src={javaLogo} alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className="skill-item">
                        <img src={javascriptLogo} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-item">
                        <img src={nodeLogo} alt="Node" />
                        <p>Node</p>
                    </div>
                    
                    <div className="skill-item">
                        <img src={pythonLogo} alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className="skill-item">
                        <img src={mysqlLogo} alt="MySQL" />
                        <p>MySQL</p>
                    </div>
                    <div className="skill-item">
                        <img src={figmaLogo} alt="Figma" />
                        <p>Figma</p>
                    </div>
                    <div className="skill-item">
                        <img src={flutterLogo} alt="Flutter" />
                        <p>Flutter</p>
                    </div>
                    <div className="skill-item">
                        <img src={gitLogo} alt="Git" />
                        <p>Git</p>
                    </div>

                </div>
            </div>
        </div>

        {/* <div className="about-achievements">
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
        </div>   */}
    </div>
  )
}

export default About
