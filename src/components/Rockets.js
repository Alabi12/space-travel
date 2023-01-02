import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocket);

  return (
    <ul className="rocketsList">
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <div
            key={rocket.id}
          >
            {rocket[0].id}
            {rocket[0].rocket_name}
            {rocket[0].description}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
