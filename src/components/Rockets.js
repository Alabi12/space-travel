import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsState = useSelector((state) => state.rockets);

  const rockets = [].concat(...rocketsState);

  return (
    <ul className="rocketsList">
      {rockets.map((rocket) => (
        <li className="rocketItem" key={rocket.id}>
          <div><img className="rocketImage" src={rocket.flickr_images[0]} alt="rocket" /></div>
          <div className="rocketDetails">
            <h3 className="rocketName">{rocket.rocket_name}</h3>
            <div>
              <i className="rocketStatus hide">Reserved</i>
              <i className="rocketDescr">{rocket.description}</i>
            </div>
            <button className="rocketBtn" type="button">Reserve Rocket</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
