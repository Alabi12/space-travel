import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rocket: rocketsReducer,
    mission: missionsReducer,
  },
});

export default store;
