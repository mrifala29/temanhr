-- TemanHR CV Screening Database Schema
-- Database: PostgreSQL 15+
-- For Supabase deployment

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Jobs Table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  position_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  responsibilities TEXT NOT NULL,
  requirements TEXT NOT NULL,
  certifications TEXT,
  ranking_limit INTEGER NOT NULL CHECK (ranking_limit > 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Screening Sessions Table
CREATE TABLE screening_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  zip_file_path VARCHAR(500) NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN ('processing', 'completed', 'failed')),
  error_message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP
);

-- Candidates Table
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  screening_session_id UUID REFERENCES screening_sessions(id) ON DELETE CASCADE,
  cv_file_path VARCHAR(500) NOT NULL,
  name VARCHAR(255) NOT NULL,
  education TEXT,
  experience TEXT,
  email VARCHAR(255),
  whatsapp VARCHAR(50),
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 100),
  status VARCHAR(50) NOT NULL CHECK (status IN ('Priority', 'Good to give chance')),
  skills_tools TEXT[],
  gaps TEXT,
  summary TEXT NOT NULL,
  reasoning TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_jobs_user_id ON jobs(user_id);
CREATE INDEX idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX idx_screening_sessions_user_id ON screening_sessions(user_id);
CREATE INDEX idx_screening_sessions_job_id ON screening_sessions(job_id);
CREATE INDEX idx_screening_sessions_status ON screening_sessions(status);
CREATE INDEX idx_candidates_session_id ON candidates(screening_session_id);
CREATE INDEX idx_candidates_score ON candidates(score DESC);

-- Row Level Security (RLS) Policies for Supabase
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE screening_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- Users: Users can only read their own data
CREATE POLICY users_select_own ON users
  FOR SELECT
  USING (auth.uid() = id);

-- Jobs: Users can only access their own jobs
CREATE POLICY jobs_select_own ON jobs
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY jobs_insert_own ON jobs
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Screening Sessions: Users can only access their own sessions
CREATE POLICY sessions_select_own ON screening_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY sessions_insert_own ON screening_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY sessions_update_own ON screening_sessions
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Candidates: Users can only access candidates from their sessions
CREATE POLICY candidates_select_own ON candidates
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM screening_sessions
      WHERE screening_sessions.id = candidates.screening_session_id
      AND screening_sessions.user_id = auth.uid()
    )
  );

CREATE POLICY candidates_insert_system ON candidates
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM screening_sessions
      WHERE screening_sessions.id = candidates.screening_session_id
      AND screening_sessions.user_id = auth.uid()
    )
  );
