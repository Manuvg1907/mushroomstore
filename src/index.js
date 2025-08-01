// npm install react-toastify

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Bootstrap & Animations
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css';

// Toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ✅ Show demo toast message
toast.success("Welcome to Mushroom Store!", {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

root.render(
  <React.StrictMode>
    <>
      <App /> {/* ✅ All routes, including /cart, are inside App.js */}
      <ToastContainer />
    </>
  </React.StrictMode>
);

// Optional: Performance reporting
reportWebVitals();
