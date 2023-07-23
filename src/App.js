import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import ProjectPage from "./Pages/ProjectPage/ProjectPage.jsx";
import Layout from './component/Layout/Layout';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Project" element={<ProjectPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
