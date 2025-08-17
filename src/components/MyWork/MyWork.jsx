import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const handleProjectClick = (githubUrl) => {
    window.open(githubUrl, '_blank');
  };

  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work, index) => {
                return (
                    <div 
                        key={index} 
                        className="work-item"
                        onClick={() => handleProjectClick(work.w_github)}
                    >
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="work-overlay">
                            <h3>{work.w_name}</h3>
                            <p className="work-desc">{work.w_desc}</p>
                            <p className="work-tech">{work.w_tech}</p>
                            <div className="work-link">
                                <span>View on GitHub</span>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default MyWork
