import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocketAction, cancelRocketAction } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketsState = useSelector((state) => state.rockets);

  const rockets = [].concat(...rocketsState);

  return (
    <ul className="rocketsList">
      {rockets.map((rocket) => (
        <li className="rocketItem" key={rocket.id}>
          <div>
            <img
              className="rocketImage"
              src={rocket.flickr_images[0]}
              alt="rocket"
            />
          </div>
          <div className="rocketDetails">
            <h3 className="rocketName">{rocket.rocket_name}</h3>
            <div>
              {rocket.reserved ? <span className="rocketStatus">Reserved</span> : ''}
              <span className="rocketDescr">{rocket.description}</span>
            </div>
            {rocket.reserved
              ? (
                <button
                  onClick={() => dispatch(cancelRocketAction(rocket.id))}
                  className="rocketBtnCancel"
                  type="button"
                >
                  Cancel Reservation
                </button>
              )
              : (
                <button
                  onClick={() => dispatch(reserveRocketAction(rocket.id))}
                  className="rocketBtnReserve"
                  type="button"
                >
                  Reserve Rocket
                </button>
              )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Rockets;
