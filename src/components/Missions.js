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
  }, [dispatch, missionsState.length]);

  const missions = [].concat(...missionsState);

  return (
    <div className="missionsList">
      <div className="missionHeader">
        <div className="missionHeadName">Mission</div>
        <div className="missionHeadDescr">Description</div>
        <div className="missionHeadStatus">Status</div>
        <div className="missionHeadBtn"> </div>
      </div>
      {missions.map((mission) => (
        <div className="missionRow" key={mission.mission_id}>
          <div className="missionName">{mission.mission_name}</div>
          <div className="missionDescr">{mission.description}</div>
          <div className="missionStatus">Status</div>
          <div className="missionBtn">
            <button type="button">Join Mission</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missions;
