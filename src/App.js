import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/mainInc';
import Company from './pages/companyInc';

const App = function myProject1() {
  return (
    <Router>
      <Routes>
        <Route path="company/:name" element={<Company />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
