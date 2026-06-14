# TemanHR - AI CV Screening Platform

Platform berbasis AI untuk membantu rekruter melakukan screening CV kandidat secara otomatis.

## Documentation

### Core Reference
- **[PRD.md](.kiro/specs/temanhr/PRD.md)** - Product Requirements Document dengan Input/Output/Detail Output
- **[ERD.md](database/ERD.md)** - Entity Relationship Diagram

### Backend Implementation
- **[backend/API.md](backend/API.md)** - API endpoints dan response format
- **[backend/ARCHITECTURE.md](backend/ARCHITECTURE.md)** - Backend system design

### Frontend Implementation
- **[frontend/API.md](frontend/API.md)** - API integration guide
- **[frontend/ARCHITECTURE.md](frontend/ARCHITECTURE.md)** - Frontend system design

### AI Service Implementation
- **[ai-service/ARCHITECTURE.md](ai-service/ARCHITECTURE.md)** - AI worker service design

### Database
- **[database/schema.sql](database/schema.sql)** - PostgreSQL schema ready for Supabase

## Quick Start

### Database Setup (Supabase)
1. Create Supabase project
2. Go to SQL Editor
3. Copy & paste contents of `database/schema.sql`
4. Execute query
5. Tables, indexes, and RLS policies are created automatically

### Environment Setup
1. Copy `.env.example` to `.env`
2. Fill in your configuration values
3. Install dependencies for each service

## Project Structure

```
temanhr/
├── frontend/              # React application
├── backend/               # Express API server
├── ai-service/            # CV analysis worker
├── database/              # Database schemas and ERD
├── .kiro/specs/temanhr/   # Product requirements
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Tech Stack

Frontend: React 18 + TypeScript + React Router + Tailwind CSS
Backend: Node.js + Express + JWT + PostgreSQL
AI Service: OpenAI/Claude API + Node.js/Python
Database: PostgreSQL (Supabase)
Storage: File system for ZIP and PDF files

## Key Features

- User authentication with JWT
- Job position management
- Batch CV upload (ZIP format)
- AI-powered CV analysis and scoring
- Candidate ranking (Priority / Good to give chance)
- Detailed analysis view with skills and gaps
- Screening history persistence
- CV download capability
- Row Level Security (RLS)

## Security

- Password hashing with bcrypt (12 rounds)
- JWT authentication with 24h expiration
- Row Level Security (RLS) in Supabase
- ZIP and PDF file validation
- Rate limiting (100 requests/hour)
- CORS configuration
- Input validation and SQL injection prevention

## Data Flow

1. User registers/logs in with JWT authentication
2. Recruiter fills job form with position details
3. Uploads ZIP file containing candidate CVs
4. Backend validates ZIP and extracts PDFs
5. Creates screening session with status "processing"
6. Queues CV analysis job for AI worker
7. AI worker processes each CV:
   - Extracts text from PDF
   - Calls AI API for analysis
   - Scores and filters (>= 60)
   - Saves to database
8. Frontend polls for status updates
9. On completion, displays ranked candidates
10. Recruiter can view details and download CVs

## Implementation Guide

When delegating to AI agent, provide context:

For Backend tasks:
```
#PRD.md
#backend/API.md
#database/schema.sql
```

For Frontend tasks:
```
#PRD.md
#frontend/API.md
```

For AI Service tasks:
```
#PRD.md
#ai-service/ARCHITECTURE.md
```

## Database Tables

- users: User accounts
- jobs: Job positions
- screening_sessions: Screening sessions with status tracking
- candidates: Analyzed candidates with scores

See database/ERD.md for relationships.
