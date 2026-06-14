# TemanHR - AI CV Screening Platform

Platform berbasis AI untuk membantu rekruter melakukan screening CV kandidat secara otomatis.

## Documentation

### Core Reference
- **[PRD.md](.kiro/specs/temanhr/PRD.md)** - Product Requirements Document dengan Input/Output/Detail Output
- **[ERD.md](database/ERD.md)** - Entity Relationship Diagram

### Backend (Laravel)
- **[backend/API.md](backend/API.md)** - REST API endpoints dengan Laravel
- **[backend/ARCHITECTURE.md](backend/ARCHITECTURE.md)** - Laravel backend system design

### Frontend (Flexible Stack)
- **[frontend/API.md](frontend/API.md)** - API integration guide dan technology options
- **[frontend/ARCHITECTURE.md](frontend/ARCHITECTURE.md)** - Frontend design (React/Vue/Next.js) dengan mascot animations

### AI Service (FastAPI + LangChain)
- **[ai-service/API.md](ai-service/API.md)** - Internal service endpoints
- **[ai-service/ARCHITECTURE.md](ai-service/ARCHITECTURE.md)** - FastAPI + LangChain + Celery service design

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
├── frontend/              # Frontend application (React/Vue/Next.js)
├── backend/               # Laravel API server
├── ai-service/            # FastAPI + LangChain CV analysis worker
├── database/              # Database schemas and ERD
├── .kiro/specs/temanhr/   # Product requirements
├── .env.example           # Environment template
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Tech Stack

Frontend: React 18 / Vue 3 / Next.js 14+ dengan TypeScript (pilih salah satu)
Backend: Laravel 10+ dengan JWT authentication
AI Service: FastAPI + LangChain + Celery
Database: PostgreSQL (Supabase)
Storage: File system untuk ZIP dan PDF files
Queue: Redis / RabbitMQ untuk Celery
Optional: Qdrant untuk RAG (vector embeddings) - future enhancement

## Key Features

- User authentication dengan JWT (Laravel)
- Job position management
- Batch CV upload (ZIP format dengan PDF validation)
- AI-powered CV analysis menggunakan LangChain chains
- Semantic scoring (0-100) dengan status classification
- Candidate ranking (Priority / Good to give chance)
- Detailed analysis view dengan skills, gaps, dan reasoning
- Screening history persistence
- CV download capability
- Row Level Security (RLS) di Supabase
- Animated mascot character di UI (asset akan diberikan saat coding)

## Security

- Password hashing with bcrypt (12 rounds)
- JWT authentication with 24h expiration
- Row Level Security (RLS) in Supabase
- ZIP and PDF file validation
- Rate limiting (100 requests/hour)
- CORS configuration
- Input validation and SQL injection prevention

## Data Flow

1. User registers/logs in dengan JWT authentication
2. Recruiter fills job form dengan position details
3. Uploads ZIP file berisi candidate CVs
4. Laravel validates ZIP dan extract PDFs
5. Creates screening session dengan status "processing"
6. Queues CV analysis job ke Celery
7. AI Service (FastAPI) processes setiap CV:
   - Extracts text dari PDF menggunakan PyPDF2
   - Builds LangChain analysis chain
   - Calls LLM (OpenAI/Claude) untuk analysis
   - Parses dan validates JSON response
   - Scores dan filters (>= 60)
   - Saves ke PostgreSQL
8. Frontend polls untuk status updates
9. On completion, displays ranked candidates
10. Recruiter dapat view details dan download CVs

## Implementation Priority

MVP (Phase 1):
- Authentication (Laravel + JWT)
- Job form dan CV upload
- Basic AI analysis (LangChain + OpenAI)
- Results display dan history
- Frontend dengan basic styling

Enhancement (Phase 2):
- Mascot character animations
- Advanced filtering/sorting
- Admin dashboard

Future (Phase 3):
- RAG implementation (Qdrant)
- Redis caching
- WebSocket real-time updates

## Implementation Guide

Saat delegate tasks ke AI agent, provide context:

For Backend (Laravel) tasks:
```
#PRD.md
#backend/API.md
#database/schema.sql
#database/ERD.md
```

For Frontend tasks:
```
#PRD.md
#frontend/API.md
#frontend/ARCHITECTURE.md
```

For AI Service tasks:
```
#PRD.md
#ai-service/API.md
#ai-service/ARCHITECTURE.md
```

## Database Tables

- users: User accounts dan authentication
- jobs: Job positions
- screening_sessions: Screening sessions dengan status tracking
- candidates: Analyzed candidates dengan scores dan analysis

Lihat database/ERD.md untuk relationships dan database/schema.sql untuk detailed schema.

## Penjelasan Technical Decisions

### Mengapa LangChain di AI Service?
LangChain provides abstraction over berbagai LLM providers (OpenAI, Claude, open-source models). Ini membuat mudah untuk:
- Switch LLM providers tanpa refactor banyak code
- Compose complex chains dengan multiple steps
- Manage prompts dan memory
- Handle retries dan fallbacks

### Mengapa Laravel untuk Backend?
- Full-featured framework dengan built-in security
- Eloquent ORM untuk database operations
- Queue system terintegrasi untuk async jobs
- Middleware untuk auth dan access control
- Sudah ada support untuk JWT via packages

### Qdrant dan Redis Optional?
- Qdrant (Vector DB): Untuk RAG dan semantic search - optional untuk MVP
- Redis: Untuk caching dan session - optional untuk MVP
- Keduanya dapat diimplementasikan later tanpa major refactor

### Frontend Stack Flexible
Bisa pilih React, Vue, atau Next.js based on preference dan expertise.
Mascot animations bisa pakai Framer Motion, Lottie, atau CSS animations.

## Notes

- Semua components berkomunikasi via REST API
- Celery workers scalable secara horizontal
- PostgreSQL dengan RLS untuk security
- File storage di local filesystem atau bisa migrate ke S3 later
