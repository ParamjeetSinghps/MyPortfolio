import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github_icon from '../../assets/github.png'
import linkedin_icon from '../../assets/linkedin.png'
// import twitter_icon from '../../assets/twitter.svg'
import instagram_icon from '../../assets/instagram.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bf704a93-4b65-4a7e-901a-a05d3c23b514");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects , so feel free to contact</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>paramjeetsinghk18@gmail.com</p>

                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+91 8919813899</p>
                        
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Hyderabad, India</p>
                        
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/ParamjeetSinghps" target="_blank" rel="noopener noreferrer">
                            <img src={github_icon} alt="GitHub" />
                        </a>
                        <a href="https://linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_icon} alt="LinkedIn" />
                        </a>
                        <a href="https://instagram.com/peter___prince" target="_blank" rel="noopener noreferrer">
                            <img src={instagram_icon} alt="instagram" />
                        </a>
                    </div>
                </div>
                
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
                    <button type="submit"className="contact-submit">Submit now</button>
                </form>
        </div>
      
    </div>
  )
}

export default Contact
