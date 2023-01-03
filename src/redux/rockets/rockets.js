const initialState = [];

const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'space-travel/rockets/RESERVE_ROCKETS';
const CANCELLED_ROCKETS = 'space-travel/rockets/CANCELLED_ROCKETS';

// Reducer
export default function rocketsReducer(state = initialState, action = {}) {
  const newState = state.map((rocket) => {
    if (rocket.id !== action.id) return rocket;
    return { ...rocket, reserved: true };
  });

  switch (action.type) {
    case GET_ROCKETS:
      return [action.rockets];
    case RESERVE_ROCKETS:
      return [...state, newState];
    case CANCELLED_ROCKETS:
      return [action.rockets];
    default:
      return state;
  }
}

// Action Creators
export function getRocketsAction(rockets) {
  return { type: GET_ROCKETS, rockets };
}

export function reserveRocketsAction(id) {
  return { type: RESERVE_ROCKETS, id };
}
export function cancelledRocketsAction(id) {
  return { type: CANCELLED_ROCKETS, id };
}
