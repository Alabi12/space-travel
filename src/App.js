import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

import { getRocketsAction } from './redux/rockets/rockets';

const url = 'https://api.spacexdata.com/v3/rockets';

const getFromAPI = () => async (dispatch) => {
  const sendRequest = async () => {
    await axios.get(`${url}`)
      .then((response) => {
        const data = response.data || null;
        const rockets = data; // MUST transform to ARRAY
        dispatch(getRocketsAction(rockets));
      })
      .catch(() => {
      });
  };
  await sendRequest();
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromAPI());
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
