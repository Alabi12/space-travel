import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsState = useSelector((state) => state.rockets);

  const rockets = [].concat(...rocketsState);

  return (
    <ul className="rocketsList">
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <div key={rocket.id}>
            {rocket.id}
            {rocket.rocket_name}
            {rocket.description}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
