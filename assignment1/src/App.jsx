import React from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Services from './Services.jsx'
import logo from './assets/jntech1.png'

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">
            {<img src={logo} alt="JN-Tech Logo" className="logo" /> }
          </div>
          <ul className="nav-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main> {/* added routes inside main for better structure */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

function Home() { // added the home component as a function not a route as other components
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to My Portfolio</h1>
        <p className="welcome-message">
          Hello! My name is <b>Josias Mefire Ndam</b>, I am a student at Centennial College and my major is Software engineering technology
          and artificial intelligence. This portfolio showcases my skills, projects, and services I offer as an aspiring software developer.
        </p>
      </section>

      <section className="mission-section">
        <h2>Mission Statement</h2>
        <p className="mission-statement">
         I have a goal, to enhance the use of artificial intelligence in software development to create smarter, 
         more efficient applications that improve user experiences and solve real-world problems small and medium size businesses.
        </p>
      </section>

      <section className="cta-section">
        <h3>Get to Know Me Better</h3>
        <div className="cta-buttons">
          <Link to="/about" className="cta-button primary">
            Learn About Me
          </Link>
          <Link to="/projects" className="cta-button secondary">
            View My Projects
          </Link>
          <Link to="/contact" className="cta-button secondary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default App
