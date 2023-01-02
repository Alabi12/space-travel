import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <NavLink />
    <Routes>
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="*" element={<p>Path is not resolved</p>} />
    </Routes>
  </BrowserRouter>
);

export default App;
