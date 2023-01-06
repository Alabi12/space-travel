import React from 'react';
import { useSelector } from 'react-redux';

const MyProfileMissions = () => {
  const missionsState = useSelector((state) => state.missions) || [];

  const missions = [].concat(...missionsState);

  return (
    <div className="myProfileMissions">
      <h3 className="myMissionsHeader">My Missions</h3>
      <ul className="myMissionsList">
        {missions
          .filter((mission) => mission.reserved)
          .map((filteredMission) => (
            <li className="myMissionItem" key={filteredMission.mission_id}>
              {filteredMission.mission_name}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MyProfileMissions;
