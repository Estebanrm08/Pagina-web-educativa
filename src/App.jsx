import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Pages/Homepage';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import "./styles/global.css";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </Router>
  );
};

export default App;