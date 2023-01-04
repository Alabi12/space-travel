import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketsState = useSelector((state) => state.rockets);

  const rockets = [].concat(...rocketsState);

  return (
    <div className="myProfileRockets">
      <div className="myRocket">My Rockets</div>
      <ul>
        {rockets
          .filter((rocket) => rocket.reserved)
          .map((filteredRocket) => (
            <li key={filteredRocket.id}>{filteredRocket.rocket_name}</li>
          ))}
      </ul>
    </div>
  );
};

export default MyProfile;
