import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketsState = useSelector((state) => state.rockets);

  const rockets = [].concat(...rocketsState);

  return (
    <div className="myProfileRockets">
      <h3 className="myRocketHeader">My Rockets</h3>
      <ul className="myRocketsList">
        {rockets
          .filter((rocket) => rocket.reserved)
          .map((filteredRocket) => (
            <li className="myRocketItem" key={filteredRocket.id}>{filteredRocket.rocket_name}</li>
          ))}
      </ul>
    </div>
  );
};

export default MyProfile;
