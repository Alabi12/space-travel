import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import { getRocketsFromAPI } from './components/API';

const App = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets) || [];

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsFromAPI());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<p>Path is not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
