Smart Chitti — Monorepo (Frontend + Backend + Docker)

Overview
--------
This repository contains a React + Vite frontend and a Spring Boot backend (Maven), plus a Docker Compose setup to run the full stack locally.

Contents
--------
- `frontend/` — Vite + React application (TailwindCSS). Dev server: Vite.
- `backend/` — Spring Boot (Java 17, Maven wrapper). REST API and security.
- `docker-compose.yml` — Orchestrates a MySQL database, backend, and frontend for local development.

Prerequisites
-------------
- Docker & Docker Compose (recommended)
- Node.js (v18+ recommended) and npm (for local frontend dev)
- Java 17 and Maven (if running backend locally)

Quick start (recommended — Docker)
---------------------------------
From the project root run:

```bash
# Start DB, backend and frontend in detached mode
docker-compose up -d --build

# Check logs (optional)
docker-compose logs -f
```

- Database container exposes MySQL on host port `3310` (container port 3306).
- Backend is configured in Docker to map host `8081` -> container `8080`.
- Frontend (production) is exposed at host port `3000` by the compose service.

Local development (frontend)
----------------------------
If you prefer to run only the frontend locally (useful for fast development):

```bash
cd frontend
npm install
npm run dev
```

Notes:
- Vite proxies `/api` to the backend. When using Docker Compose (backend in container) the proxy should point to `http://localhost:8081` (this repo's `vite.config.js` is set accordingly).
- If you run the backend locally (not in Docker), change the proxy `target` to `http://localhost:8080` or start the backend on 8081 to match the proxy.

Local development (backend)
---------------------------
Ensure a MySQL instance is available and credentials match `backend/src/main/resources/application.properties`.

Using the Maven wrapper (Windows):

```powershell
cd backend
./mvnw.cmd spring-boot:run
```

Common error:
- `ECONNREFUSED /api/chatbot/query` — indicates the frontend proxy couldn't reach the backend. Start the backend (or use Docker Compose).
- If Spring Boot fails to start with `Access denied for user 'root'@'localhost'` the DB credentials or host are wrong — use Docker Compose or adjust `application.properties`.

Development notes / recent changes
---------------------------------
- Replaced the stock ticker on the landing page with company stats and increased the ticker speed to 20s (3x faster).
- Fixed card alignment on the Schemes page — cards are now equal-height and buttons stick to the bottom.
- Footer updated: "Team-" is styled white and the FAQ link points to the app route `/faq`.
- Added a new FAQ page available at `/faq` containing privacy/FAQ content.

Project scripts
---------------
- Frontend: `npm run dev` (from `frontend/`) — runs Vite dev server.
- Backend (local): `./mvnw spring-boot:run` (from `backend/`).
- Docker: `docker-compose up -d --build` from project root.

Troubleshooting
---------------
- If `npm run dev` fails at project root, ensure you're in the correct folder. The root does not have a `dev` script — run frontend commands inside `frontend/`.
- To see available npm scripts in any folder run:

```bash
npm run
```

- If you change backend port or DB settings, restart the frontend dev server if it uses a proxy.

Want me to:
- Add placeholder pages for Privacy and Terms (I can create simple routes),
- Or revert the FAQ link to an external URL?

Contact
-------
If you want further changes or help running the app, tell me which environment you prefer (Docker or local), and I'll provide exact commands.
