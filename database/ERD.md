# Entity Relationship Diagram - TemanHR CV Screening

## Entities & Relationships

```
┌─────────────┐         ┌──────────────┐         ┌────────────────────┐         ┌─────────────┐
│    users    │ 1     N │     jobs     │ 1     N │ screening_sessions │ 1     N │ candidates  │
│             ├─────────┤              ├─────────┤                    ├─────────┤             │
│ id (PK)     │         │ id (PK)      │         │ id (PK)            │         │ id (PK)     │
│ email       │         │ user_id (FK) │         │ job_id (FK)        │         │ session (FK)│
│ password    │         │ position     │         │ user_id (FK)       │         │ name        │
│ full_name   │         │ description  │         │ zip_path           │         │ score       │
│ created_at  │         │ requirements │         │ status             │         │ status      │
└─────────────┘         │ ranking      │         │ created_at         │         │ cv_path     │
                        │ created_at   │         └────────────────────┘         │ education   │
                        └──────────────┘                                        │ experience  │
                                                                                │ email       │
                                                                                │ whatsapp    │
                                                                                │ skills      │
                                                                                │ gaps        │
                                                                                │ summary     │
                                                                                │ reasoning   │
                                                                                │ created_at  │
                                                                                └─────────────┘
```

## Relationships

1. **users → jobs** (1:N)
   - Satu user (rekruter) bisa membuat banyak job positions

2. **jobs → screening_sessions** (1:N)
   - Satu job bisa memiliki banyak screening sessions (jika di-run ulang)

3. **screening_sessions → candidates** (1:N)
   - Satu screening session menghasilkan banyak candidates

4. **users → screening_sessions** (1:N)
   - Direct ownership untuk security (user hanya akses data miliknya)

## Business Rules

- User hanya bisa akses jobs dan screening results miliknya sendiri
- Candidate hanya disimpan jika score >= 60
- Status ditentukan otomatis: score 80-100 = Priority, 60-79 = Good to give chance
- Screening session status: processing → completed/failed
- ZIP file dan extracted PDFs disimpan di file system dengan path di database
