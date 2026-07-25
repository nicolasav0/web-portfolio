# 🏗️ Portfolio Website - System Architecture

## 🧾 Overview

The project currently consists of a frontend application built with **Vue.js** and **Vite**. Its purpose is to present my portfolio, showcase personal projects, and provide quick access to my professional profiles.

The application follows a modular, component-based architecture focused on maintainability, scalability, and a clean separation of concerns.

---

## 🧱 Current Components

### Frontend (Vue.js)

Responsible for:

* Rendering the user interface.
* Managing client-side routing.
* Displaying portfolio content.
* Providing a responsive user experience.

---

## 🏛️ Frontend Architecture

The project is organized around reusable components and page-based views.

```text
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── public/
└── package.json
```

### Main building blocks

* **Views** → Page-level components.
* **Components** → Reusable UI elements.
* **Router** → Client-side navigation.
* **Assets** → Images, icons, and static resources.

---

## 🔄 Current Data Flow

1. The user navigates through the application.
2. Vue Router renders the requested view.
3. Components display static portfolio content.
4. The application updates the UI based on user interaction.

---

## 🌐 Communication

The current version is entirely frontend-based.

No backend services, APIs, or databases are used at this stage.

---

## 📦 Deployment

The application is designed to be deployed as a static website using services such as GitHub Pages, Netlify, or Vercel.
