# Product Requirements Document - TemanHR CV Screening

## Deskripsi Produk

TemanHR CV Screening adalah platform berbasis AI untuk membantu rekruter melakukan penyaringan CV kandidat secara otomatis. Sistem menerima deskripsi posisi pekerjaan dan file CV dalam format ZIP, kemudian menganalisis dan memberikan peringkat kandidat berdasarkan kesesuaian mereka dengan persyaratan posisi. Platform ini memerlukan autentikasi pengguna dan menyimpan hasil analisis untuk akses di kemudian hari.

## User Flow

```
Rekruter Login → Fill Job Form → Upload CV ZIP → Analyze → View Results → Download CV
```

## Glossary

- **TemanHR_System**: Platform CV Screening yang menganalisis dan memberikan peringkat kandidat
- **Rekruter**: Pengguna yang menggunakan sistem untuk menyaring CV kandidat
- **Job_Position**: Posisi pekerjaan yang sedang dibuka untuk rekrutmen
- **CV_File**: Dokumen Curriculum Vitae kandidat dalam format PDF
- **ZIP_Archive**: File arsip berformat ZIP yang berisi satu atau lebih CV_File
- **AI_Engine**: Komponen server-side yang melakukan analisis dan penilaian CV
- **Candidate_Score**: Nilai numerik 0-100 yang merepresentasikan kesesuaian kandidat dengan Job_Position
- **Priority_Candidate**: Kandidat dengan Candidate_Score antara 80-100
- **Good_Chance_Candidate**: Kandidat dengan Candidate_Score antara 60-79
- **Screening_Result**: Output analisis yang berisi informasi kandidat dan penilaian
- **Authentication_System**: Komponen yang mengelola login, registrasi, dan sesi pengguna

## Input

Rekruter harus memberikan informasi berikut untuk melakukan screening CV:

### Job Position Information
- Position Name: Nama posisi pekerjaan (contoh: Senior Developer)
- Description: Deskripsi singkat tentang posisi
- Responsibility: Detail tanggung jawab yang akan dilakukan kandidat
- Requirements: Detail persyaratan (pendidikan minimal/utama, pengalaman, tools/skill)
- Certification: Sertifikasi yang dibutuhkan (opsional)
- Ranking: Jumlah kandidat terbaik yang ingin ditampilkan

### Candidate Files
- Upload CV: File ZIP berisi CV dalam format PDF

### Action
- Analyze Button: Tombol untuk memicu proses analisis

---

## Output

Berdasarkan ranking yang diinput, sistem menampilkan daftar kandidat dengan informasi berikut:

### Candidate Card (List View)
Untuk setiap kandidat ditampilkan:
- Name: Nama kandidat
- Education: Pendidikan terakhir dan jurusan
- Experience: Total pengalaman kerja
- Contact: Email dan nomor WhatsApp
- Score: Nilai 0-100
- Status: Priority (score 80-100) atau Good to give chance (score 60-79)
- Detail Button: Tombol untuk melihat detail lengkap

### Filtering & Sorting
- Hanya menampilkan kandidat dengan score >= 60
- Diurutkan dari score tertinggi ke terendah
- Dibatasi sesuai ranking yang diinput (contoh: hanya top 10)

---

## Detail Output

Saat Detail Button diklik, popup menampilkan:

### Why This Candidate Matches
- Reason: Alasan positif mengapa kandidat sesuai dengan posisi

### Candidate Summary
- Simple Summary: Ringkasan sederhana profil CV kandidat

### Skills & Tools
- Tools: Daftar tools/skill yang dimiliki kandidat

### Review Points
- Missing/Near Requirements: Persyaratan yang hilang atau hampir terpenuhi

### Action
- Download CV Button: Tombol untuk download CV asli kandidat

---

## Business Rules

1. User Authentication: Rekruter harus login untuk mengakses sistem
2. Score Threshold: Hanya kandidat dengan score >= 60 yang ditampilkan
3. Status Classification:
   - Score 80-100: Priority
   - Score 60-79: Good to give chance
   - Score < 60: Tidak ditampilkan
4. Ranking Limit: Jumlah kandidat yang ditampilkan tidak melebihi ranking yang diinput
5. Data Persistence: Hasil screening disimpan dan dapat diakses kembali
6. User Data Isolation: Rekruter hanya dapat akses data miliknya sendiri
7. File Format: ZIP hanya boleh berisi file PDF
8. Error Handling: Sistem memberikan pesan error yang jelas untuk setiap kesalahan

---

## Requirements

### Requirement 1: Autentikasi Pengguna

**User Story:** Sebagai Rekruter, saya ingin memiliki akun personal di platform, sehingga hasil screening CV saya tersimpan dan dapat diakses kembali

#### Acceptance Criteria

1. THE Authentication_System SHALL menyediakan halaman registrasi untuk Rekruter baru
2. THE Authentication_System SHALL menyediakan halaman login untuk Rekruter yang sudah terdaftar
3. WHEN Rekruter berhasil login, THE Authentication_System SHALL membuat sesi pengguna yang valid
4. THE Authentication_System SHALL menyimpan hasil screening yang terkait dengan akun Rekruter
5. THE Authentication_System SHALL memastikan Rekruter hanya dapat mengakses hasil screening miliknya sendiri

### Requirement 2: Input Deskripsi Posisi Pekerjaan

**User Story:** Sebagai Rekruter, saya ingin memasukkan detail posisi pekerjaan, sehingga sistem dapat menilai kandidat berdasarkan kriteria yang tepat

#### Acceptance Criteria

1. THE TemanHR_System SHALL menyediakan form input untuk nama Job_Position
2. THE TemanHR_System SHALL menyediakan form input untuk deskripsi singkat Job_Position
3. THE TemanHR_System SHALL menyediakan form input untuk detail tanggung jawab Job_Position
4. THE TemanHR_System SHALL menyediakan form input untuk detail persyaratan Job_Position (pendidikan minimal/utama, pengalaman, tools/skill)
5. THE TemanHR_System SHALL menyediakan form input opsional untuk sertifikasi yang dibutuhkan
6. THE TemanHR_System SHALL menyediakan form input untuk jumlah kandidat dengan skor tertinggi yang diinginkan (ranking)
7. THE TemanHR_System SHALL memvalidasi bahwa semua field wajib terisi sebelum melanjutkan ke tahap analisis

### Requirement 3: Upload CV Kandidat

**User Story:** Sebagai Rekruter, saya ingin mengunggah banyak CV sekaligus dalam satu file ZIP, sehingga proses screening dapat dilakukan secara efisien

#### Acceptance Criteria

1. THE TemanHR_System SHALL menyediakan interface upload untuk ZIP_Archive
2. THE TemanHR_System SHALL memvalidasi bahwa file yang diunggah berformat ZIP
3. WHEN ZIP_Archive diunggah, THE TemanHR_System SHALL mengekstrak semua CV_File di dalamnya
4. THE TemanHR_System SHALL memvalidasi bahwa setiap CV_File berformat PDF
5. IF ZIP_Archive mengandung file non-PDF, THEN THE TemanHR_System SHALL menolak file tersebut dan menampilkan pesan error
6. THE TemanHR_System SHALL menyimpan ZIP_Archive yang valid untuk proses analisis

### Requirement 4: Analisis CV dengan AI

**User Story:** Sebagai Rekruter, saya ingin sistem menganalisis CV kandidat secara otomatis menggunakan AI, sehingga saya dapat menghemat waktu dalam proses screening manual

#### Acceptance Criteria

1. THE TemanHR_System SHALL menyediakan tombol "Analyze" untuk memicu proses analisis
2. WHEN tombol "Analyze" diklik, THE AI_Engine SHALL memproses semua CV_File di server
3. WHEN analisis berjalan, THE TemanHR_System SHALL menampilkan indikator loading atau progress
4. THE AI_Engine SHALL membandingkan konten setiap CV_File dengan persyaratan Job_Position
5. THE AI_Engine SHALL memberikan Candidate_Score antara 0-100 untuk setiap kandidat
6. THE AI_Engine SHALL mengekstrak informasi kandidat: nama, pendidikan, pengalaman, email, nomor WhatsApp
7. THE AI_Engine SHALL mengidentifikasi skill dan tools yang dimiliki kandidat
8. THE AI_Engine SHALL mengidentifikasi gap atau kekurangan kandidat terhadap persyaratan
9. THE AI_Engine SHALL menghasilkan ringkasan kandidat dan alasan kesesuaian
10. WHEN analisis selesai, THE TemanHR_System SHALL menyimpan Screening_Result ke database

### Requirement 5: Tampilan Hasil Ranking Kandidat

**User Story:** Sebagai Rekruter, saya ingin melihat daftar kandidat terbaik berdasarkan ranking yang saya tentukan, sehingga saya dapat fokus pada kandidat yang paling sesuai

#### Acceptance Criteria

1. THE TemanHR_System SHALL menampilkan kandidat yang memiliki Candidate_Score 60 atau lebih
2. THE TemanHR_System SHALL mengurutkan kandidat berdasarkan Candidate_Score dari tertinggi ke terendah
3. THE TemanHR_System SHALL membatasi jumlah kandidat yang ditampilkan sesuai nilai ranking yang diinput Rekruter
4. THE TemanHR_System SHALL menampilkan status "Priority" untuk Priority_Candidate
5. THE TemanHR_System SHALL menampilkan status "Good to give chance" untuk Good_Chance_Candidate
6. THE TemanHR_System SHALL menampilkan informasi berikut untuk setiap kandidat: nama, pendidikan, pengalaman, kontak (email/WhatsApp), Candidate_Score, status
7. THE TemanHR_System SHALL menyediakan tombol "Detail" untuk setiap kandidat dalam daftar

### Requirement 6: Detail Informasi Kandidat

**User Story:** Sebagai Rekruter, saya ingin melihat detail lengkap analisis kandidat, sehingga saya dapat memahami alasan scoring dan membuat keputusan rekrutmen yang lebih baik

#### Acceptance Criteria

1. WHEN tombol "Detail" diklik, THE TemanHR_System SHALL menampilkan popup dengan informasi detail kandidat
2. THE TemanHR_System SHALL menampilkan alasan mengapa kandidat sesuai dengan Job_Position
3. THE TemanHR_System SHALL menampilkan ringkasan profil kandidat
4. THE TemanHR_System SHALL menampilkan daftar tools dan skill yang dimiliki kandidat
5. THE TemanHR_System SHALL menampilkan review points yang mencakup persyaratan yang hilang atau hampir terpenuhi
6. THE TemanHR_System SHALL menyediakan tombol "Download CV" dalam popup detail
7. WHEN tombol "Download CV" diklik, THE TemanHR_System SHALL mengunduh CV_File asli kandidat tersebut

### Requirement 7: Persistensi Data

**User Story:** Sebagai Rekruter, saya ingin hasil screening tersimpan di akun saya, sehingga saya dapat mengaksesnya kembali tanpa harus melakukan analisis ulang

#### Acceptance Criteria

1. WHEN analisis selesai, THE TemanHR_System SHALL menyimpan semua Screening_Result terkait dengan akun Rekruter
2. THE TemanHR_System SHALL menyimpan deskripsi Job_Position yang digunakan dalam screening
3. THE TemanHR_System SHALL menyimpan semua CV_File yang telah dianalisis
4. WHEN Rekruter login kembali, THE TemanHR_System SHALL menampilkan riwayat screening yang pernah dilakukan
5. THE TemanHR_System SHALL memungkinkan Rekruter untuk mengakses kembali detail hasil screening sebelumnya

### Requirement 8: Penanganan Error

**User Story:** Sebagai Rekruter, saya ingin mendapatkan feedback yang jelas jika terjadi kesalahan, sehingga saya tahu apa yang harus diperbaiki

#### Acceptance Criteria

1. IF ZIP_Archive tidak valid, THEN THE TemanHR_System SHALL menampilkan pesan error yang menjelaskan masalahnya
2. IF CV_File tidak berformat PDF, THEN THE TemanHR_System SHALL menampilkan pesan error dengan daftar file yang tidak valid
3. IF field wajib pada form kosong, THEN THE TemanHR_System SHALL menampilkan pesan validasi pada field yang bersangkutan
4. IF AI_Engine gagal memproses CV_File, THEN THE TemanHR_System SHALL menampilkan pesan error dan mencatat log kesalahan
5. IF tidak ada kandidat dengan Candidate_Score 60 atau lebih, THEN THE TemanHR_System SHALL menampilkan pesan bahwa tidak ada kandidat yang memenuhi threshold
6. THE TemanHR_System SHALL memastikan Rekruter dapat mencoba kembali setelah memperbaiki kesalahan
