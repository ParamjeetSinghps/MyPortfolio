import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
        <div className="experience-title">
            <h1>Work Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="experience-container">
            <div className="experience-item">
                <div className="experience-header">
                    <h3>Frontend Developer</h3>
                    <span className="company">MH Cognition</span>
                    <span className="duration">Paid Internship</span>
                </div>
                <div className="experience-content">
                    <p>• Developed and maintained features for a Learning Management System (LMS) project</p>
                    <p>• Collaborated with development team to implement multiple frontend features</p>
                    <p>• Worked on responsive UI components and user interface improvements</p>
                    <p>• Contributed to code reviews and participated in agile development processes</p>
                    <p>• Gained hands-on experience with modern frontend technologies and best practices</p>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-header">
                    <h3>Software Developer</h3>
                    <span className="company">ScholarsSphere</span>
                    <span className="duration">Paid Internship</span>
                </div>
                <div className="experience-content">
                    <p>• Developed School Management System powered with AI functionality</p>
                    <p>• Worked on both web and mobile technologies for comprehensive platform development</p>
                    <p>• Contributed to building the company's core product from ground up</p>
                    <p>• Gained exposure to real-world projects and industry best practices</p>
                    <p>• Collaborated with cross-functional teams to deliver AI-powered educational solutions</p>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-header">
                    <h3>Frontend Developer</h3>
                    <span className="company">Kraf Technologies</span>
                    <span className="duration">Part-time</span>
                </div>
                <div className="experience-content">
                    <p>• Assisted in the development of company website with focus on responsive design</p>
                    <p>• Developed responsive UI/UX components for optimal user experience</p>
                    <p>• Collaborated with design and development teams to implement modern web solutions</p>
                    <p>• Contributed to website maintenance and performance optimization</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience 