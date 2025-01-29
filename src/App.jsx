import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Project from './pages/Project';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/project/:projectName" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
