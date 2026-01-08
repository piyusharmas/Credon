# Credon — Trading Dashboard

A small full-stack trading dashboard prototype composed of a Node/Express backend and two React frontends (a dashboard app and a marketing frontend). This repository groups the backend API and two Vite + React apps so you can run and develop each independently.

**Status:** Prototype / in-development

---

**What the project does**

- Provides a backend API that serves holdings, positions and accepts new orders.
- Ships a React dashboard app intended for authenticated users to view holdings, positions and place orders.
- Includes a marketing frontend for the landing, product and signup flows.

**Key features**

- Backend: simple Express API with Mongoose models for `Holdings`, `Positions`, and `Orders` ([backend/index.js](backend/index.js)).
- Dashboard: Vite + React UI using Material UI and Chart.js for charts ([dashboard](dashboard)).
- Marketing frontend: Vite + React landing pages and product pages ([frontend](frontend)).

---

**Quickstart (local development)**

Prerequisites:

- Node.js 18+ and npm
- MongoDB (local or Atlas)

1) Backend

```bash
cd backend
npm install
# create a .env file with MONGO_URL (and optional PORT)
# example .env:
# MONGO_URL=mongodb://localhost:27017/credon
# PORT=3000

# Run (development)
npx nodemon index.js
# or
node index.js
```

The backend exposes these routes (see `backend/index.js`):

- `GET /allHoldings` — returns all holdings
- `GET /allPositions` — returns all positions
- `POST /newOrder` — accepts a JSON order payload `{ name, qty, price, mode }`
- `GET /` — health/root

2) Dashboard app (developer UI)

```bash
cd dashboard
npm install
npm run dev
# Open http://localhost:5173 (Vite default)
```

3) Marketing frontend

```bash
cd frontend
npm install
npm run dev
# Open http://localhost:5173 (or the port Vite reports)
```

Notes:

- The dashboard UI expects the backend API available (update axios base URLs in the dashboard source if necessary).
- Use `.env` to configure backend connection details.

---

**Project layout**

- `backend/` — Express API and Mongoose models (`model/` and `schemas/`). See [backend/index.js](backend/index.js).
- `dashboard/` — Primary React dashboard app (Material UI, charts). See [dashboard/package.json](dashboard/package.json).
- `frontend/` — Marketing/landing React app. See [frontend/package.json](frontend/package.json).

---

**Contributing & Support**

- To contribute, please open an issue or a pull request. Add tests and keep changes scoped to a single area.
- For contribution guidelines and code of conduct, see `CONTRIBUTING.md` (create one if missing).

**Maintainers**

- See repository owners and collaborators. For fast questions, open an issue.

---

If you want, I can add a minimal `CONTRIBUTING.md`, CI badges, or a Docker Compose file to run MongoDB + backend + dashboard together — tell me which you'd prefer next.
