import React from 'react'
// Import project images
import tfAwsImage from './assets/tf_aws.png'
import jenkinsGhaImage from './assets/jenkins_gha.png'
import githubAppImage from './assets/github_app.jpeg'

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p className="projects-subtitle">
          A showcase of my professional work in DevSecOps, Infrastructure Automation, and Software Development
        </p>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">
            <img src={tfAwsImage} alt="Terraform AWS Infrastructure" />
          </div>
          <div className="project-content">
            <div className="project-header">
              <h3>AWS Infrastructure Automation</h3>
              <span className="project-date">December 2023</span>
            </div>
            <p className="project-client">Financial Institution</p>
            
            <div className="project-description">
              <h4>My Role & Contributions:</h4>
              <ul>
                <li>Created reusable Terraform modules for AWS resources that can be utilized across multiple projects</li>
                <li>Drafted GitHub Actions workflows to automate infrastructure compliance scanning and deployment across all environments</li>
                <li>Configured semantic release to automate module versioning and creation of releases</li>
              </ul>
              
              <h4>Outcome:</h4>
              <p>Successfully standardized infrastructure deployment processes, reducing deployment time by 60% and ensuring compliance across all environments.</p>
            </div>
            
            <div className="tech-stack">
              <span className="tech-badge">Terraform</span>
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">GitHub Actions</span>
              <span className="tech-badge">Semantic Release</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={jenkinsGhaImage} alt="Pipeline Migration from Jenkins to GitHub Actions" />
          </div>
          <div className="project-content">
            <div className="project-header">
              <h3>CI/CD Pipeline Modernization</h3>
              <span className="project-date">January 2025</span>
            </div>
            <p className="project-client">Financial Institution</p>
            
            <div className="project-description">
              <h4>My Role & Contributions:</h4>
              <ul>
                <li>Refactored and rewrote existing pipelines from Jenkins to GitHub Actions workflows while maintaining all functionalities</li>
                <li>Successfully implemented Helm-based deployment to replace current Kubernetes manifest deployment</li>
              </ul>
              
              <h4>Outcome:</h4>
              <p>Modernized CI/CD infrastructure resulting in faster deployment cycles, improved maintainability, and enhanced scalability for containerized applications.</p>
            </div>
            
            <div className="tech-stack">
              <span className="tech-badge">GitHub Actions</span>
              <span className="tech-badge">Jenkins</span>
              <span className="tech-badge">Helm</span>
              <span className="tech-badge">Kubernetes</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={githubAppImage} alt="GitHub Deployment and Compliance Bot" />
          </div>
          <div className="project-content">
            <div className="project-header">
              <h3>GitHub Deployment & Compliance Bot</h3>
              <span className="project-date">August 2025</span>
            </div>
            <p className="project-client">IT Corporation</p>
            
            <div className="project-description">
              <h4>My Role & Contributions:</h4>
              <ul>
                <li>Created a GitHub deployment bot using Node.js that analyzes Pull Requests and automates repository compliance checking</li>
                <li>Implemented scheduled compliance checks to ensure ongoing repository standards</li>
                <li>Built a repository template to standardize new project creation across the organization</li>
              </ul>
              
              <h4>Outcome:</h4>
              <p>Streamlined development workflows with automated compliance checks, reducing manual review time by 70% and ensuring consistent project standards organization-wide.</p>
            </div>
            
            <div className="tech-stack">
              <span className="tech-badge">Node.js</span>
              <span className="tech-badge">GitHub API</span>
              <span className="tech-badge">JavaScript</span>
              <span className="tech-badge">Automation</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects