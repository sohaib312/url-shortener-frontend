# 🔗 URL Shortener – Frontend

This is the **React-based frontend** for the URL Shortener application. It communicates with a Spring Boot backend to provide users with a simple interface for generating and using short URLs.

---

## 🚀 Features

- 🌍 Input any long URL to generate a short link
- 🔁 Click the short link to test redirection
- 📋 Copy short URL to clipboard
- 🎨 Minimal and responsive design

---

## 🛠️ Technologies Used

- React (CRA or Vite)
- Axios (for API calls)
- TailwindCSS / Bootstrap (for styling)
- React Hooks

---

## 🌐 Backend Compatibility

Make sure the backend is:
- Running locally at `http://localhost:8080`
- Exposes the following endpoints:
  - `POST /api/shorten`
  - `GET /{shortCode}` (for redirection)

You can update the base URL in the `api.js` or `.env` file:

```js
// api.js
export const API_BASE_URL = "http://localhost:8080/api";
