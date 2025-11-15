````md
# 🌐 Personal Web Portfolio — React + Three.js + Vite

A fully responsive and animated personal portfolio website built with **React**, **Three.js**, **@react-three/fiber**, **TailwindCSS**, and **Framer Motion**.

It includes a 3D hero section, animated sections, project showcase, technologies, contact form, and is fully CI/CD-ready with **Jenkins (Docker in Docker)** and **Render**.

---

## 🚀 Features

### 🎨 Frontend & UI
- Built with **React 18 + Vite**
- Styled using **TailwindCSS**
- Smooth animations via **Framer Motion**
- 3D hero section using:
  - `three`
  - `@react-three/fiber`
  - `@react-three/drei`
- Mobile responsive design
- Reusable UI components and animations

### 🧩 Portfolio Sections
- Hero section with 3D model  
- About section  
- Skills / Technologies section  
- Experience  
- Portfolio projects  
- Contact form (EmailJS)  
- Animated background stars  

### ⚙️ DevOps / Deployment
- Fully containerized with **Docker**
- CI/CD using:
  - **Jenkins running Docker-in-Docker (DinD)**  
  - **Docker image build & push**
  - **Automatic deployment to Render**

- Supports **Render Web Service (Docker image deploy)**

---

## 📦 Tech Stack

### Frontend
- **React 18**
- **Vite**
- **TailwindCSS**
- **Framer Motion**
- **Three.js**
- **@react-three/fiber**
- **@react-three/drei**

### Tools & CI/CD
- **Docker** (multi-stage build)
- **Jenkins (Docker-in-Docker)**
- **Render Web Services**

---

## 🛠️ Installation & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/SaraGhabri/PersonalWebPortfolio.git
cd PersonalWebPortfolio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

👉 Open **[http://localhost:5173](http://localhost:5173)**

---

## 🏗️ Build for Production

```bash
npm run build
```

To preview your production build locally:

```bash
npm run preview
```

---

## 🐳 Docker Support

This project includes a **multi-stage Dockerfile** that:

* Builds the React app with Vite
* Serves it using **nginx**

### Build the Docker image

```bash
docker build -t personalwebportfolio .
```

### Run the container

```bash
docker run -d -p 8080:80 personalwebportfolio
```

👉 Open **[http://localhost:8080](http://localhost:8080)**

---

## 📦 Jenkins CI/CD (Docker-in-Docker)

### ✔️ Typical Jenkins Pipeline (Summary)

1. Jenkins pulls the repo
2. Runs `npm ci && npm run build`
3. Builds the Docker image
4. Tags and pushes image to Docker Hub
5. Triggers deploy on Render using:

   * Render Deploy Hook **or**
   * Render Deploy API

You only need to create Jenkins credentials:

| ID                   | Purpose                              |
| -------------------- | ------------------------------------ |
| `dockerhub-creds`    | Docker Hub username + password/token |
| `render-deploy-hook` | (Optional) Render Deploy Hook URL    |
| `render-api-key`     | (If using API deploy)                |
| `render-service-id`  | Render service                       |

The `Jenkinsfile` included in this repo automates everything.

---

## 🌐 Deployment on Render

Render offers two deployment strategies:

---

### ▶️ **Option A — Deploy using Docker image pushed by Jenkins (recommended)**

1. Go to **Render Dashboard**
2. Create a **Web Service**
3. Choose **Deploy an existing image (Docker)**
4. Enter your image:

   ```
   yourdockerhubuser/personalwebportfolio:latest
   ```
5. Save & deploy

### To trigger auto-deploys from Jenkins

Use **Deploy Hook** URL:

```
https://api.render.com/deploy/srv-xxxxxxxxx?key=xxxxxxxxx
```

Jenkins only needs to run:

```bash
curl -X POST "$RENDER_DEPLOY_HOOK"
```

---

### ▶️ **Option B — Render builds from Git (no Docker Hub needed)**

If you don't want Docker Hub:

1. Create Web Service → **Build from GitHub**
2. Set build command:

   ```
   npm install
   npm run build
   ```
3. Set publish directory:

   ```
   dist
   ```

---

## 🗂️ Folder Structure

```
src/
 ├── assets/               # Images, icons
 ├── components/           # All UI & 3D components
 │    ├── canvas/          # Three.js scenes
 ├── constants/            # Data for services, projects, etc.
 ├── hoc/                  # Higher-Order Components
 ├── utils/                # Animations, helpers
 ├── styles.js             # Tailwind helper classes
 ├── App.jsx
 └── main.jsx
```

---

## 📬 Contact Form

This project uses **EmailJS**.
Configure your keys in:

```
src/components/Contact.jsx
```

Environment variables recommended:

```
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
```

---


## 🙌 Author

**Sarah Ghabri**

Portfolio repo:
[https://github.com/SaraGhabri/PersonalWebPortfolio](https://github.com/SaraGhabri/PersonalWebPortfolio)

---

## ⭐ Support

If you found this project useful, please give the repo a star ⭐


```
