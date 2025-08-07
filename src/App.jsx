import React from 'react';
import { environmentUser } from './utils/environmentVariables';

const App = () => {
  const user = environmentUser === 'Default User';
  return (
    <div className="app">
      <header className="header">
        <div className="logo">ModernUI</div>
        <nav className="nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Features</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1 className="hero-title">Welcome to Our Platform, built by <span className={`${user ? 'alert' : ''}`}>{environmentUser} {user && 'Please change'}</span></h1>
          <p className="hero-subtitle">Discover amazing features designed for your success</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Powerful data visualization tools to track your progress.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Performance</h3>
            <p>Lightning fast processing for all your needs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Security</h3>
            <p>Enterprise-grade protection for your data.</p>
          </div>
        </section>

        <section className="testimonial">
          <blockquote>
            "This platform has completely transformed how we do business. The interface is intuitive and the features are exactly what we needed."
          </blockquote>
          <div className="author">- Jane Smith, CEO</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Tutorials</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
        <div className="copyright">© 2025 ModernUI. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;