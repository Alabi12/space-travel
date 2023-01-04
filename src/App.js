import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { getRocketsFromAPI } from './components/API';

const App = () => {
  const dispatch = useDispatch();
  const rocketsState = useSelector((state) => state.rockets) || [];

  useEffect(() => {
    if (rocketsState.length === 0) {
      dispatch(getRocketsFromAPI());
    }
  }, [dispatch, rocketsState.length]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<p>Path is not resolved</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
