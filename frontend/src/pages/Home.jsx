import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Find Your Dream Career</h1>
        <p>Discover internships and jobs worldwide. From startups to Fortune 500 companies, find opportunities that match your skills and ambitions.</p>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="stat-number">500+</div>
          <div className="stat-label">Active Jobs</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Companies</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">1000+</div>
          <div className="stat-label">Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">95%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:24,marginTop:40}}>
        <Link to='/browse' className='card' style={{textAlign:'center',padding:'32px'}}>
          <div style={{fontSize:'3rem',marginBottom:'16px'}}>🔍</div>
          <h3 style={{margin:'0 0 12px 0',color:'var(--primary)'}}>Browse Openings</h3>
          <p style={{color:'var(--muted)',margin:0}}>Explore thousands of job opportunities from top companies worldwide</p>
        </Link>
        
        <Link to='/post' className='card' style={{textAlign:'center',padding:'32px'}}>
          <div style={{fontSize:'3rem',marginBottom:'16px'}}>📝</div>
          <h3 style={{margin:'0 0 12px 0',color:'var(--primary)'}}>Post a Job</h3>
          <p style={{color:'var(--muted)',margin:0}}>Hire talented professionals for your company or organization</p>
        </Link>
        
        <Link to='/signup' className='card' style={{textAlign:'center',padding:'32px'}}>
          <div style={{fontSize:'3rem',marginBottom:'16px'}}>🚀</div>
          <h3 style={{margin:'0 0 12px 0',color:'var(--primary)'}}>Get Started</h3>
          <p style={{color:'var(--muted)',margin:0}}>Create your account and start your career journey today</p>
        </Link>
      </div>

      <div className="card" style={{marginTop:'60px',textAlign:'center',background:'rgba(255,255,255,0.1)',backdropFilter:'blur(10px)'}}>
        <h2 style={{margin:'0 0 16px 0'}}>Why Choose CourierNest?</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:24,marginTop:24}}>
          <div>
            <div style={{fontSize:'2rem',marginBottom:'8px'}}>🌍</div>
            <h4>Global Opportunities</h4>
            <p className="small">Access jobs from companies worldwide, remote and on-site</p>
          </div>
          <div>
            <div style={{fontSize:'2rem',marginBottom:'8px'}}>⚡</div>
            <h4>Quick Applications</h4>
            <p className="small">Apply to multiple jobs with just a few clicks</p>
          </div>
          <div>
            <div style={{fontSize:'2rem',marginBottom:'8px'}}>🎯</div>
            <h4>Smart Matching</h4>
            <p className="small">AI-powered job recommendations based on your profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}
