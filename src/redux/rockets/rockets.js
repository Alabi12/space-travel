const initialState = [];

const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'space-travel/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'space-travel/rockets/CANCEL_ROCKET';

const changeStatus = (state, id, newStatus) => {
  const stateConc = [].concat(...state);
  const newState = stateConc.map((item) => {
    if (item.id !== id) return item;
    return { ...item, reserved: newStatus };
  });
  return newState;
};

// Reducer
export default function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return [action.rockets];
    case RESERVE_ROCKET:
      return [changeStatus(state, action.id, true)];
    case CANCEL_ROCKET:
      return [changeStatus(state, action.id, false)];
    default:
      return state;
  }
}

// Action Creators
export function getRocketsAction(rockets) {
  return { type: GET_ROCKETS, rockets };
}

export function reserveRocketAction(id) {
  return { type: RESERVE_ROCKET, id };
}
export function cancelRocketAction(id) {
  return { type: CANCEL_ROCKET, id };
}
