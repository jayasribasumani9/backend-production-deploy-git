# Professional Backend API

A production-ready Express.js starter project demonstrating clean architecture, environment configuration, and professional documentation.

## 🛠 Tech Stack
- **Node.js** & **Express.js**
- **Dotenv** (Environment Management)
- **Git** (Version Control)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment:
   - Copy `.env.example` to a new file named `.env`
   - Fill in your local secrets in `.env`

### Running the Project
```bash
# Development mode
npm start
```

## 🔐 Environment Variables Required

| Variable | Description | Example |
| :--- | :--- | :--- |
| PORT | Server port | 3000 |
| JWT_SECRET | Auth secret key | your_super_secret_key |
| DATABASE_URL | Connection string | mongodb://localhost:27017/mydb |

## 📑 API Endpoints

### 1. Health Check
- **Method:** `GET`
- **Route:** `/api/status`
- **Auth Required:** No
- **Sample Response:**
  ```json
  { "status": "Server is running" }
  ```

### 2. Get Data
- **Method:** `GET`
- **Route:** `/api/data`
- **Auth Required:** No
- **Sample Response:**
  ```json
  { "message": "Success", "data": [] }
  ```

---
*Created for the Engineering Discipline Assignment.*
