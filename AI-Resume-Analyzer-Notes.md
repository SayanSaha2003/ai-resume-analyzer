# AI Resume Analyzer — Project Notes

## 1. Project Overview

- AI-powered resume analysis application.
- Users can paste resume text or upload a PDF.
- Provides AI-generated feedback for improving resumes.
- Target users: students, freshers, and job seekers.

## 2. Features

- Google Sign-In / Sign-Out
- Paste resume text
- PDF upload
- PDF drag & drop
- Client-side PDF text extraction
- AI resume analysis
- Overall score
- Summary
- Strengths & weaknesses
- Skills
- Improvement suggestions
- Loading & error handling

## 3. Tech Stack

- Frontend: React, Vite, Tailwind CSS, Lucide React
- Backend: Node.js, Express.js
- AI: OpenRouter API, GPT-4o-mini
- Authentication: Firebase Authentication
- PDF: pdfjs-dist
- Deployment: Render
- Database: None

## 4. Architecture & Data Flow

React
↓
Resume Input
├── Text
└── PDF → PDF.js → Text
↓
Express API
↓
OpenRouter
↓
AI Analysis
↓
React UI

## 5. Project Structure

ai-resume-analyzer/
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ │ ├── AnalysisResult.jsx
│ │ │ ├── Navbar.jsx
│ │ │ ├── PdfResumeInput.jsx
│ │ │ ├── ResumeInput.jsx
│ │ │ └── TextResumeInput.jsx
│ │ │
│ │ ├── pages/
│ │ │ └── Analyzer.jsx
│ │ │
│ │ ├── services/
│ │ │ ├── pdfService.js
│ │ │ └── resumeApi.js
│ │ │
│ │ ├── firebase.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ │
│ ├── .env
│ ├── package.json
│ └── ...
│
├── server/
│ ├── routes/
│ │ └── analyze.js
│ │
│ ├── .env
│ ├── server.js
│ └── package.json
│
└── README.md

### Important Files

- `Analyzer.jsx` → manages resume text, analysis, loading and errors.
- `ResumeInput.jsx` → switches between text and PDF input.
- `TextResumeInput.jsx` → handles pasted resume text.
- `PdfResumeInput.jsx` → handles PDF upload and drag & drop.
- `pdfService.js` → extracts text from PDF using PDF.js.
- `resumeApi.js` → sends resume data to the backend API.
- `firebase.js` → Firebase configuration.
- `analyze.js` → sends resume to OpenRouter and returns AI analysis.
- `server.js` → Express server and middleware setup.

## 6. Database Design

- No database currently used.
- Resume data is processed without storing history.

## 7. Authentication & Authorization

- Firebase Authentication
- Google OAuth
- `onAuthStateChanged()` maintains login state.
- `signOut()` handles logout.
- Firebase Authorized Domains configured for deployment.

## 8. API

### POST /api/analyze

resumeText
↓
Express
↓
OpenRouter
↓
JSON Analysis
↓
Frontend

Returns:

- Overall score
- Summary
- Strengths
- Weaknesses
- Skills
- Suggestions

## 9. Important Concepts

- React state management
- Component-based architecture
- REST API
- Express routing
- Firebase Authentication
- Google OAuth
- Environment variables
- AI API integration
- Prompt engineering
- System & user prompts
- Structured JSON output
- Client-side PDF extraction
- Drag & drop
- Loading/error handling
- Frontend/backend deployment

## 10. Future Improvements

- MongoDB analysis history
- User dashboard
- ATS score
- Job description matching
- Resume improvement/rewrite
- Rate limiting
- Protected backend routes
- Better PDF/error handling
- Improved UI/UX
