import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nearby from './components/nearby';
import SchoolFilter from './components/SchoolFilter';
// import CollegeFilter from './components/CollegeFilter'; // Create this component similarly
import CategoryFilter from "./components/CategoryFilter";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nearby />} />
          <Route path="/schools" element={<SchoolFilter/>} />
          <Route path="/colleges" element={ <CategoryFilter/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;