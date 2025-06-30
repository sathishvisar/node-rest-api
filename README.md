# 🛡️ SOLID Node.js API Boilerplate with TypeScript + MongoDB

A scalable, modular Node.js backend application using **Express**, **MongoDB**, **BullMQ**, **worker_threads**, and **TypeScript** — built with clean architecture and **SOLID principles**.

---

## ✨ Features

- ✅ User **authentication** (JWT) — Login & Register
- ✅ Full **User CRUD API**
- ✅ **PDF generation** via background jobs
- ✅ **Email notification** support (extendable)
- ✅ **MongoDB** (Mongoose ODM)
- ✅ Modular folder structure with clear separation of concerns
- ✅ Background job processing using **BullMQ + worker_threads**
- ✅ Strict **TypeScript** typing
- ✅ **SOLID principle**-based service-layer architecture
- ✅ Middleware for **authorization**, **error handling**, etc.

---

## 🔧 Tech Stack

- **Node.js** + **Express**
- **TypeScript** (strict mode)
- **MongoDB** + Mongoose
- **JWT** (Authentication)
- **BullMQ** (Job Queue)
- **worker_threads** (PDF jobs)
- **PDFKit** (PDF generation)
- **dotenv** (config management)

---

## 📁 Folder Structure

```
project-root/
├── node_modules/
├── src/
│   ├── index.ts
│   ├── app.ts
│   ├── confifg/
│   │   └── database.ts
│   ├── controllers/
│   ├── queues/                 🔄 BullMQ job queues
│   │   ├── pdfQueue.ts
│   │   └── redisConfig.ts
│   ├── workers/                🧵 Worker threads and Bull workers
│   │   ├── pdfWorker.ts
│   │   └── thread/pdfThread.ts
│   ├── interfaces/
│   ├── models/
│   ├── middlewares/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
├── tsconfig.json
├── package.json
```



---

## 🧠 SOLID Principles Breakdown (Where They Are Used)

| Principle | Where It’s Applied | Purpose |
|----------|--------------------|---------|
| **S**ingle Responsibility | `services/`, `controllers/`, `middlewares/` | Each module does one job only |
| **O**pen/Closed | `PDFService`, `EmailService` | Easily add new logic without modifying existing |
| **L**iskov Substitution | Service interfaces (e.g. `IPDFReportService`) | Can replace with mocks or other services |
| **I**nterface Segregation | `IPDFReportService`, `IUserService` | Small, focused contracts |
| **D**ependency Inversion | Controllers depend on interfaces, not models | Flexible, testable architecture |

┌──────────────────────────────┐
│         CONTROLLERS          │  <-- Presentation Layer
│ Handles req/res only         │
└────────────┬─────────────────┘
             │
┌────────────▼─────────────────┐
│          SERVICES            │  <-- Business Logic (SRP, DIP)
│ Each handles one responsibility
└────────────┬─────────────────┘
             │
┌────────────▼─────────────────┐
│          INTERFACES          │  <-- Abstractions (ISP, DIP)
│ Defines contracts between layers
└────────────┬─────────────────┘
             │
┌────────────▼─────────────────┐
│         IMPLEMENTATIONS      │  <-- OCP, LSP
│ Mongoose Models, PDF Kit     │
└──────────────────────────────┘

```