# AI Resume Analyzer

AI-powered resume analyzer that uses AI to provide structured feedback and improvement suggestions.

## Features

- Google Authentication
- Paste resume text
- PDF upload + drag & drop
- Client-side PDF text extraction
- AI resume analysis
- Score, strengths, weaknesses, skills & suggestions

## Tech Stack

- React + Vite + Tailwind CSS
- Node.js + Express.js
- OpenRouter + GPT-4o-mini
- Firebase Authentication
- pdfjs-dist
- Render

## Architecture

React → Express API → OpenRouter → AI Result → React

PDF → PDF.js → Text → Express API

## API

`POST /api/analyze` — Analyzes the submitted resume text.

## Environment Variables

### Client

Firebase configuration + `VITE_API_URL`

### Server

`OPENROUTER_API_KEY`

Never commit `.env` files or API keys.

## Deployment

- Frontend → Render Static Site
- Backend → Render Web Service

## Future Improvements

- MongoDB analysis history
- ATS score
- Job description matching
- Resume rewriting
- User dashboard
