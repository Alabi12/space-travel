import React from 'react';
import { useSelector } from 'react-redux';

const MyProfileMissions = () => {
  const missionsState = useSelector((state) => state.missions) || [];

  const missions = [].concat(...missionsState);

  return (
    <div className="myProfileMissions">
      <div className="myMission">My Missions</div>
      <ul>
        {missions
          .filter((mission) => mission.reserved)
          .map((filteredMission) => (
            <li key={filteredMission.mission_id}>
              {filteredMission.mission_name}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MyProfileMissions;
