import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import AboutPage from "./component/AboutPage/AboutPage";
import ContactPage from "./component/ContactPage/ContactPage.jsx";
import ServicePage from "./component/ServicePage/ServicePage.jsx";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
