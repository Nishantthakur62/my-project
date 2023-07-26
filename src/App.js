// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
// import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage.jsx';
import ProjectPage from './Pages/ProjectPage/ProjectPage.jsx';
import Layout from './component/Layout/Layout';
import StateHooksPage from './Pages/StateHooksPage/StateHooksPage';
import EffectHooksPage from './Pages/EffectHooksPage/EffectHooksPage';
import ContextHooksPage from './Pages/ContextHooksPage/ContextHooksPage';
import {ThemeProvider } from './Pages/ContextHooksPage/ThemeContext.js'; // Import the ThemeProvider
import RefHooksPage from './Pages/RefHooksPage/RefHooksPage';
import UseMemoPage from './Pages/UseMemoPage/UseMemoPage';
import UseCallBackHookPage from './Pages/UseCallBackHookPage/UseCallBackHookPage';
import UseCustomHooksPage from './Pages/UseCustomHooks/UseCustomHooks';
// import ThemeWrapper from './providers/ThemeWrapper'; // Make sure to import the ThemeWrapper component




function App() {
  return (
    <Router>
        <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Project" element={<ProjectPage />} />
            <Route path="/state-hooks" element={<StateHooksPage />} />
            <Route path="/effect-hooks" element={<EffectHooksPage />} />
            <Route path="/context-hook" element={<ContextHooksPage />} />
            <Route path="/ref-hook" element={<RefHooksPage/>} />
            <Route path="/memo-hook" element={<UseMemoPage/>} />
            <Route path="/callback-hook" element={<UseCallBackHookPage/>} />
            <Route path="/custom-hooks" element={<UseCustomHooksPage/>} />
          </Routes>
        </Layout>
    </ThemeProvider>
      </Router>
  );
}

export default App;
