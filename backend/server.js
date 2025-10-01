const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const DATA_FILE = path.join(__dirname, 'data.json');
function loadDB(){ try{ return JSON.parse(fs.readFileSync(DATA_FILE,'utf8')) }catch(e){ return { users: [], jobs: [], applications: [] } } }
function saveDB(db){ fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf8') }

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());

// ensure seed data
const seed = {
  users: [
    { id: 'u_admin', username: 'admin', role: 'admin', password: 'admin' },
    { id: 'u_john', username: 'john', role: 'student', password: 'pass' }
  ],
  jobs: [
    { _id: 'job1', title: 'Frontend Intern', company: 'Acme Soft', location: 'Remote', job_type: 'Internship', pay_type: 'Unpaid', level: 'Fresher', description: 'A short internship for frontend learners.', posted_on: Date.now() },
    { _id: 'job2', title: 'Junior Backend Engineer', company: 'NodeWorks', location: 'USA', job_type: 'Job', pay_type: 'Paid', level: 'Experienced', description: 'Backend position for Node.js developers.', posted_on: Date.now() }
  ],
  applications: []
};
if(!fs.existsSync(DATA_FILE)){ saveDB(seed); }

// helpers
function uid(prefix='id_'){ return prefix + Math.random().toString(36).slice(2,9) }

// auth
app.post('/api/auth/signup', (req,res)=>{
  const db = loadDB();
  const { username, password, role } = req.body;
  if(!username || !password) return res.status(400).json({ message: 'Missing' });
  if((db.users || []).find(u=>u.username===username)) return res.status(400).json({ message: 'User exists' });
  const user = { id: uid('u_'), username, password, role: role || 'student' };
  if (!db.users) db.users = [];
  db.users.push(user);
  saveDB(db);
  res.json({ token: 'token_'+user.id, user: { id: user.id, username: user.username, role: user.role } });
});

app.post('/api/auth/login', (req,res)=>{
  const db = loadDB();
  const { username, password } = req.body;
  const u = (db.users || []).find(x=>x.username===username && x.password===password);
  if(!u) return res.status(400).json({ message: 'Invalid' });
  res.json({ token: 'token_'+u.id, user: { id: u.id, username: u.username, role: u.role } });
});

// jobs list & create
app.get('/api/jobs', (req,res)=>{
  const db = loadDB();
  let jobs = (db.jobs || []).slice().sort((a,b)=>b.posted_on - a.posted_on);
  const q = req.query.q;
  if(q) jobs = jobs.filter(j => (j.title + j.company + j.description).toLowerCase().includes(q.toLowerCase()));
  if(req.query.job_type) jobs = jobs.filter(j=>j.job_type===req.query.job_type);
  if(req.query.pay_type) jobs = jobs.filter(j=>j.pay_type===req.query.pay_type);
  if(req.query.level) jobs = jobs.filter(j=>j.level===req.query.level);
  res.json(jobs);
});

app.post('/api/jobs', (req,res)=>{
  const db = loadDB();
  const job = { ...req.body, _id: uid('job_'), posted_on: Date.now() };
  if (!db.jobs) db.jobs = [];
  db.jobs.push(job);
  saveDB(db);
  res.json(job);
});

app.get('/api/jobs/:id', (req,res)=>{
  const db = loadDB();
  const job = (db.jobs || []).find(j=>j._id===req.params.id);
  if(!job) return res.status(404).json({ message: 'Not found' });
  res.json(job);
});

// apply
app.post('/api/apply/:jobId', (req,res)=>{
  const db = loadDB();
  const job = (db.jobs || []).find(j=>j._id===req.params.jobId);
  if(!job) return res.status(404).json({ message: 'Job not found' });
  const appObj = { _id: uid('app_'), job: job._id, name: req.body.name, email: req.body.email, phone: req.body.phone, resume_text: req.body.resume_text, applied_on: Date.now() };
  if (!db.applications) db.applications = [];
  db.applications.push(appObj);
  saveDB(db);
  res.json(appObj);
});

// admin stats
app.get('/api/admin/stats', (req,res)=>{
  const db = loadDB();
  const totalJobs = (db.jobs || []).length;
  const totalApps = (db.applications || []).length;
  const paidCount = (db.jobs || []).filter(j=>j.pay_type==='Paid').length;
  res.json({ totalJobs, totalApps, paidCount });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
