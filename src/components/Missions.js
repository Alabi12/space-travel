import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsFromAPI } from './API';
import { joinMissionAction, leaveMissionAction } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsState = useSelector((state) => state.missions) || [];

  const missions = [].concat(...missionsState);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionsFromAPI());
    }
  }, [dispatch, missions.length]);

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
          {mission.reserved ? <div><span className="missionStatusTrue">Active Member</span></div>
            : <div><span className="missionStatusFalse">NOT A MEMBER</span></div>}
          <div className="missionBtnContainer">
            {mission.reserved
              ? <button type="button" className="missionBtnLeave" onClick={() => dispatch(leaveMissionAction(mission.mission_id))}>Leave Mission</button>
              : <button type="button" className="missionBtnJoin" onClick={() => dispatch(joinMissionAction(mission.mission_id))}>Join Mission</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Missions;
