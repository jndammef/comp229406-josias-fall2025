import React from 'react'

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>My Services</h1>
        <p className="services-subtitle">
          Professional DevSecOps and Software Development solutions to streamline your business operations
        </p>
      </div>

      <div className="services-grid">
        
        {/* Infrastructure as Code */}
        <div className="service-card">
          <div className="service-icon">
            <span className="service-emoji">🏗️</span>
          </div>
          <h3>Infrastructure as Code (IaC)</h3>
          <p className="service-description">
            Design and implement scalable, reusable Terraform modules for AWS cloud infrastructure. 
            Automate provisioning, configuration, and deployment processes to ensure consistent 
            and reliable infrastructure across all environments.
          </p>
          <ul className="service-features">
            <li>Terraform module development</li>
            <li>AWS resource automation</li>
            <li>Infrastructure compliance scanning</li>
            <li>Multi-environment deployment</li>
          </ul>
          <div className="service-tech">
            <span className="tech-tag">Terraform</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">Infrastructure</span>
          </div>
        </div>

        {/* CI/CD Pipeline Development */}
        <div className="service-card">
          <div className="service-icon">
            <span className="service-emoji">🔄</span>
          </div>
          <h3>CI/CD Pipeline Development</h3>
          <p className="service-description">
            Modernize your deployment workflows by migrating from legacy systems to GitHub Actions. 
            Implement automated testing, building, and deployment processes that improve development 
            velocity and reduce manual errors.
          </p>
          <ul className="service-features">
            <li>GitHub Actions workflow design</li>
            <li>Legacy pipeline migration (Jenkins to GHA)</li>
            <li>Helm-based Kubernetes deployments</li>
            <li>Automated testing integration</li>
          </ul>
          <div className="service-tech">
            <span className="tech-tag">GitHub Actions</span>
            <span className="tech-tag">Helm</span>
            <span className="tech-tag">Kubernetes</span>
          </div>
        </div>

        {/* DevSecOps Automation */}
        <div className="service-card">
          <div className="service-icon">
            <span className="service-emoji">🛡️</span>
          </div>
          <h3>DevSecOps & Security Automation</h3>
          <p className="service-description">
            Integrate security practices into your development lifecycle with automated compliance 
            checking, vulnerability scanning, and security policy enforcement. Build secure, 
            reliable systems from the ground up.
          </p>
          <ul className="service-features">
            <li>Security compliance automation</li>
            <li>Vulnerability scanning integration</li>
            <li>Policy as code implementation</li>
            <li>Security monitoring setup</li>
          </ul>
          <div className="service-tech">
            <span className="tech-tag">DevSecOps</span>
            <span className="tech-tag">Security</span>
            <span className="tech-tag">Compliance</span>
          </div>
        </div>

        {/* Web Application Development */}
        <div className="service-card">
          <div className="service-icon">
            <span className="service-emoji">💻</span>
          </div>
          <h3>Web Application Development</h3>
          <p className="service-description">
            Build modern, responsive web applications using cutting-edge technologies like React, 
            Node.js, and cloud services. Focus on user experience, performance, and scalability 
            to deliver applications that meet business objectives.
          </p>
          <ul className="service-features">
            <li>React.js application development</li>
            <li>Responsive design implementation</li>
            <li>API integration and development</li>
            <li>Performance optimization</li>
          </ul>
          <div className="service-tech">
            <span className="tech-tag">React</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Node.js</span>
          </div>
        </div>

      </div>

      <div className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how these services can help streamline your development processes and improve your infrastructure.</p>
        <a href="/contact" className="cta-button primary">Get In Touch</a>
      </div>
    </div>
  )
}

export default Services