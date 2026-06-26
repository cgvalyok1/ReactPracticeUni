import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './main/Main';
import List from './list/List';
import University from './university/University';
import Chart from './chart/Chart';
import Testing from './testing/Testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/university/:id" element={<University />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/test" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;