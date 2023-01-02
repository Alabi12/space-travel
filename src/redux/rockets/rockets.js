const initialState = [];

const GET_ROCKETS = 'space-travel/rockets/GET_ROCKETS';

// Reducer
export default function rocketsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ROCKETS:
      return [action.rockets];
    default: return state;
  }
}

// Action Creators
export function getRocketsAction(rockets) {
  return { type: GET_ROCKETS, rockets };
}
