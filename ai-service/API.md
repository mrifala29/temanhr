# AI Service API

Internal service endpoints for CV analysis.

## Health Check

### GET /health
Check if AI service is running

Response (200):
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Status Endpoints

### GET /tasks/:taskId/status
Check CV analysis job status

Response (200):
```json
{
  "taskId": "celery-task-id",
  "status": "pending|processing|completed|failed",
  "progress": 0-100,
  "error": "error message if failed"
}
```

## Internal Communication

### Job Queue (Celery)
Backend sends analysis job to Celery queue:

Task: analyze_cvs
Payload:
```json
{
  "sessionId": "uuid",
  "jobId": "uuid",
  "cvFiles": [
    "/storage/uploads/user_id/session_id/extracted/cv1.pdf",
    "/storage/uploads/user_id/session_id/extracted/cv2.pdf"
  ],
  "jobRequirements": {
    "position_name": "Senior Developer",
    "description": "...",
    "responsibilities": "...",
    "requirements": "...",
    "certifications": "..."
  }
}
```

### Database Update
After analysis completes, AI service updates PostgreSQL:

1. Insert candidates into candidates table
2. Update screening_sessions status = completed
3. Set completed_at timestamp

## Error Responses

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "Details here"
}
```

### Connection Errors
- Database connection failed: log and retry
- AI API timeout: retry with backoff
- Queue connection failed: log and alert

## Performance Notes

- Typical CV analysis: 5-15 seconds per CV
- Batch processing: Process multiple CVs sequentially
- Retry policy: 3 attempts with exponential backoff
- Timeout: 30 seconds per AI API call
