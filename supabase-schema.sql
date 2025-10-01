-- CourierNest Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'student' CHECK (role IN ('admin', 'student')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
    _id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    job_type VARCHAR(50) NOT NULL CHECK (job_type IN ('Job', 'Internship')),
    pay_type VARCHAR(50) NOT NULL CHECK (pay_type IN ('Paid', 'Unpaid')),
    level VARCHAR(50) NOT NULL CHECK (level IN ('Fresher', 'Experienced', 'All')),
    description TEXT NOT NULL,
    posted_on BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
    _id VARCHAR(50) PRIMARY KEY,
    job VARCHAR(50) NOT NULL REFERENCES jobs(_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    resume_text TEXT NOT NULL,
    applied_on BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data
INSERT INTO users (username, password, role) VALUES
('admin', 'admin', 'admin'),
('john', 'pass', 'student'),
('ali', 'ali', 'student')
ON CONFLICT (username) DO NOTHING;

INSERT INTO jobs (_id, title, company, location, job_type, pay_type, level, description, posted_on) VALUES
('job1', 'Frontend Developer Intern', 'TechCorp', 'San Francisco, CA', 'Internship', 'Paid', 'Fresher', 'Join our dynamic frontend team and work on cutting-edge web applications. You''ll learn React, TypeScript, and modern development practices while contributing to real projects.', 1759312818665),
('job2', 'Senior Backend Engineer', 'DataFlow Inc', 'New York, NY', 'Job', 'Paid', 'Experienced', 'We''re looking for an experienced backend engineer to join our growing team. You''ll work with Node.js, Python, and cloud technologies to build scalable microservices.', 1759312818665),
('job3', 'UX/UI Design Intern', 'Creative Studio', 'Remote', 'Internship', 'Unpaid', 'Fresher', 'Perfect opportunity for design students to gain real-world experience. Work on user research, wireframing, and creating beautiful interfaces for our clients.', 1759312818665),
('job4', 'Full Stack Developer', 'StartupXYZ', 'Austin, TX', 'Job', 'Paid', 'Experienced', 'Join our fast-growing startup and help build the next generation of web applications. We use React, Node.js, and AWS to create amazing user experiences.', 1759312818665),
('job5', 'Data Science Intern', 'Analytics Pro', 'Seattle, WA', 'Internship', 'Paid', 'Fresher', 'Work with our data science team to analyze large datasets and build machine learning models. Great opportunity to learn Python, R, and data visualization tools.', 1759312818665)
ON CONFLICT (_id) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a demo app)
CREATE POLICY "Enable read access for all users" ON users FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON users FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON jobs FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON jobs FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON jobs FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON applications FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON applications FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jobs_posted_on ON jobs(posted_on DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_job_type ON jobs(job_type);
CREATE INDEX IF NOT EXISTS idx_jobs_pay_type ON jobs(pay_type);
CREATE INDEX IF NOT EXISTS idx_jobs_level ON jobs(level);
CREATE INDEX IF NOT EXISTS idx_applications_job ON applications(job);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
