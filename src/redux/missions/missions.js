const initialState = [];

const GET_MISSIONS = 'space-travel/missions/GET_MISSIONS';

// Reducer
export default function missionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MISSIONS:
      return [action.missions];
    default: return state;
  }
}

// Action Creators
export function getMissionsAction(missions) {
  return { type: GET_MISSIONS, missions };
}
