const URL = 'https://api.spacexdata.com/v3/missions';

// Actions
const LOAD = 'spaceships/missions/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return action.state;
    default:
      return state;
  }
};

// Action Creators
export const loadMissions = () => async (dispatch) => {
  const res = await fetch(URL);
  const data = await res.json();
  const state = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({ type: LOAD, state });
};
