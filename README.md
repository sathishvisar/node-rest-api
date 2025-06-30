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
- **ESLint** + **Prettier** (Code style)

---

## 📁 Folder Structure

```
project-root/
├── node_modules/
├── src/
│   ├── index.ts
│   ├── app.ts
│   ├── confifg/
│   ├── controllers/
│   ├── queues/                 🔄 BullMQ job queues
│   │   └── pdfQueue.ts
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