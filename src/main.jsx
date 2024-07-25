import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./components/Payment.jsx";
import Course from "./components/Course.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>,
);
