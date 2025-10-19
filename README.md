# 🛍️ Vintage Mart — Frontend Application

> A modern e-commerce web application for vintage and unique products built with **React**, **Context Api with UseReducer**, and **React-Router**.  
> Vintage Mart provides a smooth shopping experience with product listings, user authentication, a dynamic cart system, and secure checkout flow.

---

## 🚀 Demo

🔗 [Live Demo](https://your-live-demo-link.com)\
📦 [Backend Repository](https://github.com/yourusername/vintage-mart-backend)

---

## 🧠 Overview

Vintage Mart is a responsive and dynamic frontend built to simulate a real-world e-commerce experience.  
Users can browse products, filter by category, view detailed product pages, add items to cart, and securely checkout — all wrapped in a clean, minimalist UI inspired by vintage aesthetics.

---

## ✨ Features

✅ **Product Catalog** – Browse all available vintage items with images, prices, and details.\
✅ **Product Details Page** – Individual product pages with reviews and “Add to Cart”.\
✅ **Shopping Cart** – Persistent cart management using Context API or Redux Toolkit.\
✅ **Authentication** – Login / Signup / Logout (JWT integration-ready).\
✅ **Checkout Flow** – Smooth cart-to-checkout experience.\
✅ **Responsive UI** – Fully optimized for desktop, tablet, and mobile.\
✅ **API Integration** – Connects with REST API built using Node.js & Express (backend).\
✅ **Modern UX** – Built with reusable components and state management.\

---

## 🧰 Tech Stack

**Frontend**

- ⚛️ React (v18+)
- 🧭 React Router DOM
- 🧩 Context API with useReducer
- ⚡ Axios (for API calls)

**Build & Tools**

- ⚙️ Vite
- 🧱 Git & GitHub for version control

---

## 🗂️ Folder Structure

```
vintage-mart-frontend/
│
├── public/ # Static assets (favicon, index.html, etc.)
│
├── src/ # Application source code
│ ├── assets/ # Images, icons, fonts
│ ├── components/ # Reusable UI components (Navbar, Button, etc.)
│ ├── context/ # React Context API (AuthContext, WishCartContext, ToastContext)
│ ├── styles/ # Global styles
│ ├── App.jsx # Root App component
│ └── main.jsx # Entry point that renders App
│
├── .env # Environment variables (API URLs, secrets)
├── .eslint.config.js # ESLint configuration
├── utils # Helper functions and constants
├── index.html # Main HTML template
├── package.json # Project metadata and dependencies
└── vite.config.js # Vite build configuration

```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/vintage-mart-frontend.git
cd vintage-mart-frontend
```

### 2️⃣ Install dependencies

```
npm install
# or
yarn install
```

### 3️⃣ Run the development server

```npm run dev
# then open http://localhost:5173
```

### 4️⃣ Build for production

```
npm run build
```

### 5️⃣ Preview production build

```
npm run preview
```

### 🔌 Environment Variables

Create a `.env` file in the root directory with:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 🧑‍💻 Author

Minhaj Hussain Syed

Frontend Developer | React | TypeScript | UI/UX

🌐 [Portfolio](https://syedminhajhussain.netlify.app/)

💼 [linkedin](https://syedminhajhussain.netlify.app/)

## 🌟 Future Improvements

- Add product reviews & ratings
- Improve accessibility (WCAG)
- Add order history pages
- Implement dark/light theme toggle
