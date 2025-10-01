import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Link } from 'react-router-dom';

export default function Browse() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({job_type:'', pay_type:'', level:'', q:''});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.listJobs(filters)
      .then(setJobs)
      .catch(() => setJobs([]))
      .finally(() => setLoading(false));
  }, [filters]);

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

  return (
    <div>
      <div className="search-bar">
        <h2 style={{margin:'0 0 20px 0',color:'var(--dark)'}}>Find Your Next Opportunity</h2>
        <input 
          className="search-input"
          placeholder='Search jobs, companies, or keywords...' 
          value={filters.q} 
          onChange={e => setFilters({...filters, q: e.target.value})} 
        />
        <div className="filters">
          <select value={filters.job_type} onChange={e => setFilters({...filters, job_type: e.target.value})}>
            <option value=''>All Types</option>
            <option>Internship</option>
            <option>Job</option>
          </select>
          <select value={filters.pay_type} onChange={e => setFilters({...filters, pay_type: e.target.value})}>
            <option value=''>All Pay Types</option>
            <option>Paid</option>
            <option>Unpaid</option>
          </select>
          <select value={filters.level} onChange={e => setFilters({...filters, level: e.target.value})}>
            <option value=''>All Levels</option>
            <option>Fresher</option>
            <option>Experienced</option>
            <option>All</option>
          </select>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'24px'}}>
        <h2 style={{margin:0,color:'var(--dark)'}}>
          {loading ? 'Loading...' : `${jobs.length} Job${jobs.length !== 1 ? 's' : ''} Found`}
        </h2>
        {jobs.length > 0 && (
          <div className="small" style={{color:'var(--muted)'}}>
            Showing all results
          </div>
        )}
      </div>

      <div style={{display:'grid',gap:24}}>
        {jobs.map(j => (
          <div key={j._id} className='card job-card'>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'16px'}}>
              <div style={{flex:1}}>
                <h3 className='job-title'>{j.title}</h3>
                <div className="company-name">@ {j.company}</div>
                <div className="location">📍 {j.location}</div>
              </div>
              <div style={{textAlign:'right',display:'flex',flexDirection:'column',gap:'8px'}}>
                <span className={`badge ${getBadgeClass('job_type', j.job_type)}`}>
                  {j.job_type}
                </span>
                <span className={`badge ${getBadgeClass('pay_type', j.pay_type)}`}>
                  {j.pay_type}
                </span>
                <span className={`badge ${getBadgeClass('level', j.level)}`}>
                  {j.level}
                </span>
              </div>
            </div>
            
            <div className="description">
              {j.description?.slice(0, 200)}
              {j.description?.length > 200 && '...'}
            </div>

            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}>
              <div className="small" style={{color:'var(--muted)'}}>
                Posted {new Date(j.posted_on).toLocaleDateString()}
              </div>
              <Link to={`/job/${j._id}`} className='btn btn-primary'>
                View Details →
              </Link>
            </div>
          </div>
        ))}
        
        {!loading && jobs.length === 0 && (
          <div className='card' style={{textAlign:'center',padding:'60px 20px'}}>
            <div style={{fontSize:'4rem',marginBottom:'20px'}}>🔍</div>
            <h3 style={{margin:'0 0 12px 0',color:'var(--muted)'}}>No jobs found</h3>
            <p className="small" style={{margin:0}}>
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
