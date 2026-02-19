# 🚀 NestJS Authentication & Authorization Boilerplate

A **NestJS + MySQL + TypeORM** based backend application providing secure **authentication, authorization, and API protection** mechanisms.
This project is designed as a **starter template** for scalable backend systems.

---

## ✨ Features

### 🔐 Authentication

* User **Registration**
* User **Login**
* **JWT-based authentication**
* Password hashing using **bcrypt**

### 🛡️ Authorization & Security

* **JWT Guard** – protects authenticated routes
* **Role-Based Access Control (RBAC)** – restrict endpoints by user roles
* **Internal API Key Guard** – secure internal or trusted APIs
* **Request Throttling** – prevents abuse and excessive requests

### 👤 Users Module

* Base `User` entity with common properties
* Used to test and validate:

  * Authentication flow
  * Role-based guards
  * API key guard

### 📄 API Documentation

* **Swagger (OpenAPI)** integration
* Fully documented:

  * Auth endpoints
  * User endpoints
* Easy testing via Swagger UI

### 🗄️ Database & Migrations

* MySQL database
* TypeORM migrations included
* Migration for creating the **users** table

---

## 🧱 Tech Stack

* **NestJS**
* **TypeScript**
* **MySQL**
* **TypeORM**
* **JWT**
* **Swagger**
* **bcrypt**
* **NestJS Throttler**

---

## ⚙️ Environment Configuration

Create a `.env` file in the project root and add the following:

```env
# Server
PORT=3005
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=abc123
DB_DATABASE=wacommerce

# JWT
JWT_SECRET=0c49dd49081620b9c1cdfc298aae480f
JWT_EXPIRES_IN=7d

# API Security
INTERNAL_API_KEY=979703020054fcb7f5996a2ca8fecf6c2f48135b
BCRYPT_SALT_ROUNDS=10

# Throttling
THROTTLE_TTL=60
THROTTLE_LIMIT=100
```

---

## 📦 Installation

```bash
# Clone repository
git clone <your-repo-url>

# Install dependencies
npm install
```

---

## 🛢️ Database Setup

1. Install and run **MySQL**
2. Create the database manually:

   ```sql
   CREATE DATABASE wacommerce;
   ```

3. Run migrations to create required tables:

   ```bash
   npm run migration:run
   ```

---

## ▶️ Running the Application

### First time

```bash
npm run build
npm run migration:run
npm run dev
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm run start:prod
```

### Debug Mode

```bash
npm run start:debug
```

The server will start at:

```
http://localhost:3005
```

---

## 📘 Swagger API Documentation

Once the application is running, access Swagger UI at:

```
http://localhost:3005/api
```

Swagger includes:

* Auth endpoints (register, login)
* User endpoints
* JWT & API key authorization support

---

## 🧪 Authentication Flow

1. **Register** a new user
2. **Login** to receive a JWT token
3. Use the token in requests:

   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
4. For internal APIs, include:

   ```
   x-api-key: <INTERNAL_API_KEY>
   ```

---

## 🛡️ Guards Implemented

| Guard Type    | Description                    |
| ------------- | ------------------------------ |
| JWT Guard     | Protects authenticated routes  |
| Role Guard    | Restricts access by user roles |
| API Key Guard | Secures internal endpoints     |
| Throttler     | Limits requests per IP         |

---

## 🧩 Available NPM Scripts

```json
"scripts": {
  "build": "nest build",
  "start": "nest start",
  "dev": "nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main",
  "typeorm": "typeorm-ts-node-commonjs",
  "migration:generate": "npm run typeorm -- migration:generate -d src/config/typeorm-cli.config.ts",
  "migration:run": "npm run typeorm -- migration:run -d src/config/typeorm-cli.config.ts",
  "migration:revert": "npm run typeorm -- migration:revert -d src/config/typeorm-cli.config.ts"
}
```

---

## 📌 Use Cases

* Backend starter for SaaS platforms
* Secure REST APIs
* Microservices authentication base
* Internal & external API security

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## Code explanation

