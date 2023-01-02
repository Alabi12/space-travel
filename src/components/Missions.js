import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPI } from './API';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsState = useSelector((state) => state.missions) || [];

  useEffect(() => {
    if (missionsState.length === 0) {
      dispatch(getMissionsFromAPI());
    }
  }, [dispatch]);

  const missions = [].concat(...missionsState);

  return (
    <ul className="missionsList">
      {missions.map((mission) => (
        <li key={mission.mission_id}>
          <div key={mission.mission_id}>
            {mission.mission_id}
            {mission.description}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Missions;
