const initialState = [];

const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';
const GET_MISSIONS = 'space-travel/missions/GET_MISSIONS';

// Reducer
export default function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, action.rockets];
    case GET_MISSIONS:
      return action.missions;
    default: return state;
  }
}

// Action Creators
export function getRocketsAction(rockets) {
  return { type: GET_ROCKETS, rockets };
}

export function getMissionsAction(missions) {
  return { type: GET_MISSIONS, missions };
}
