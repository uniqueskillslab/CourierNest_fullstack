import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../api';

export default function JobDetail({ user }) {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [form, setForm] = useState({ name:'', email:'', phone:'', resume_text:'' });
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.getJob(id)
      .then(setJob)
      .catch(() => setJob(null))
      .finally(() => setLoading(false));
  }, [id]);

  function submit(e) {
    e.preventDefault();
    setApplying(true);
    api.applyJob(id, form)
      .then(() => {
        setApplied(true);
        setForm({ name:'', email:'', phone:'', resume_text:'' });
      })
      .catch(() => alert('Error applying. Please try again.'))
      .finally(() => setApplying(false));
  }

  const getBadgeClass = (type, value) => {
    if (type === 'pay_type') {
      return value === 'Paid' ? 'badge-success' : 'badge-warning';
    }
    if (type === 'job_type') {
      return value === 'Internship' ? 'badge-primary' : 'badge-success';
    }
    if (type === 'level') {
      return value === 'Experienced' ? 'badge-success' : 'badge-primary';
    }
    return 'badge-primary';
  };

  if (loading) {
    return (
      <div className="card" style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:'3rem',marginBottom:'20px'}}>⏳</div>
        <h3 style={{margin:'0 0 12px 0',color:'var(--muted)'}}>Loading job details...</h3>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="card" style={{textAlign:'center',padding:'60px 20px'}}>
        <div style={{fontSize:'4rem',marginBottom:'20px'}}>❌</div>
        <h3 style={{margin:'0 0 12px 0',color:'var(--muted)'}}>Job not found</h3>
        <p className="small" style={{margin:'0 0 20px 0'}}>
          The job you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/browse" className="btn btn-primary">Browse Jobs</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="card" style={{marginBottom:'24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'24px'}}>
          <div style={{flex:1}}>
            <h1 className='job-title' style={{fontSize:'2rem',marginBottom:'12px'}}>{job.title}</h1>
            <div className="company-name" style={{fontSize:'1.2rem',marginBottom:'8px'}}>@ {job.company}</div>
            <div className="location">📍 {job.location}</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
            <span className={`badge ${getBadgeClass('job_type', job.job_type)}`}>
              {job.job_type}
            </span>
            <span className={`badge ${getBadgeClass('pay_type', job.pay_type)}`}>
              {job.pay_type}
            </span>
            <span className={`badge ${getBadgeClass('level', job.level)}`}>
              {job.level}
            </span>
          </div>
        </div>

        <div style={{background:'var(--light)',padding:'20px',borderRadius:'12px',marginBottom:'24px'}}>
          <h3 style={{margin:'0 0 12px 0',color:'var(--dark)'}}>Job Description</h3>
          <div className="description" style={{whiteSpace:'pre-line',lineHeight:'1.6'}}>
            {job.description}
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',borderTop:'1px solid var(--border)'}}>
          <div className="small" style={{color:'var(--muted)'}}>
            Posted {new Date(job.posted_on).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <Link to="/browse" className="btn btn-outline">← Back to Jobs</Link>
        </div>
      </div>

      {!user ? (
        <div className="card" style={{textAlign:'center',background:'rgba(99, 102, 241, 0.05)',border:'2px solid rgba(99, 102, 241, 0.1)'}}>
          <div style={{fontSize:'3rem',marginBottom:'16px'}}>🔐</div>
          <h3 style={{margin:'0 0 12px 0',color:'var(--primary)'}}>Login Required</h3>
          <p className="small" style={{margin:'0 0 20px 0'}}>
            You need to be logged in to apply for this job.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center'}}>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-outline">Sign Up</Link>
          </div>
        </div>
      ) : applied ? (
        <div className="card" style={{textAlign:'center',background:'rgba(16, 185, 129, 0.05)',border:'2px solid rgba(16, 185, 129, 0.1)'}}>
          <div style={{fontSize:'3rem',marginBottom:'16px'}}>✅</div>
          <h3 style={{margin:'0 0 12px 0',color:'var(--success)'}}>Application Submitted!</h3>
          <p className="small" style={{margin:'0 0 20px 0'}}>
            Thank you for your interest. We'll review your application and get back to you soon.
          </p>
          <Link to="/browse" className="btn btn-primary">Browse More Jobs</Link>
        </div>
      ) : (
        <div className="card">
          <h3 style={{margin:'0 0 20px 0',color:'var(--dark)'}}>Apply for this position</h3>
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input 
                required 
                placeholder='Enter your full name' 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
              />
            </div>
            
            <div className="form-group">
              <label>Email Address *</label>
              <input 
                required 
                type="email"
                placeholder='Enter your email address' 
                value={form.email} 
                onChange={e => setForm({...form, email: e.target.value})} 
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                placeholder='Enter your phone number (optional)' 
                value={form.phone} 
                onChange={e => setForm({...form, phone: e.target.value})} 
              />
            </div>
            
            <div className="form-group">
              <label>Resume / Cover Letter *</label>
              <textarea 
                required
                rows="6"
                placeholder='Paste your resume or write a brief introduction about yourself...' 
                value={form.resume_text} 
                onChange={e => setForm({...form, resume_text: e.target.value})} 
              />
            </div>
            
            <button 
              className='btn btn-primary' 
              type="submit"
              disabled={applying}
              style={{width:'100%',padding:'16px',fontSize:'16px'}}
            >
              {applying ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
