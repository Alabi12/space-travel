const initialState = [];

const GET_MISSIONS = 'space-travel/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travel/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travel/missions/LEAVE_MISSION';

const changeStatus = (state, id, newStatus) => {
  const stateConc = [].concat(...state);
  const newState = stateConc.map((item) => {
    if (item.mission_id !== id) return item;
    return { ...item, reserved: newStatus };
  });
  return newState;
};

// Reducer
export default function missionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MISSIONS:
      return [action.missions];
    case JOIN_MISSION:
      return [changeStatus(state, action.id, true)];
    case LEAVE_MISSION:
      return [changeStatus(state, action.id, false)];
    default: return state;
  }
}

// Action Creators
export function getMissionsAction(missions) {
  return { type: GET_MISSIONS, missions };
}

export function joinMissionAction(id) {
  return { type: JOIN_MISSION, id };
}
export function leaveMissionAction(id) {
  return { type: LEAVE_MISSION, id };
}
