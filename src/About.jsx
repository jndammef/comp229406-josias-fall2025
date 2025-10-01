import React from 'react'
import resume from './assets/Arctiq CV - Josias Ndam Mefire.pdf'
import profilePhoto from './assets/josias_photo.JPG'

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      
      <div className="about-content">
        <div className="about-photo-section">
          {<img src={profilePhoto} alt="Josias Ndam Mefire" className="profile-photo" />}
        </div>
        
        <div className="about-info-section">
          <h2>Josias Ndam Mefire</h2>
          <p className="about-description">
            I am a dedicated Software Engineering Technology and Artificial Intelligence student at Centennial College. 
            With a passion for innovative technology solutions, I focus on developing smart applications that enhance 
            user experiences and solve real-world challenges for businesses and individuals. With a DevSecOps background, I am able to handle 
            the entire software development lifecycle (coding, testing, infrastructure provisioning, production deployment), 
            with a security-first mindset. 
          </p>
          
          <div className="resume-section">
            <h3>My Resume</h3>
            <p>Learn more about my experience, education, and skills:</p>
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer" //added for security reasons when using target="_blank"
              className="resume-button"
              download="Josias_Ndam_Mefire_Resume.pdf"
            >
              📄 Download My Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About