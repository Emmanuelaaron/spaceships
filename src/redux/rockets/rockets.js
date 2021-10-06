const URL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const LOAD = 'spaceships/rockets/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case (LOAD):
      return action.state;
    default: return state;
  }
};

// Action Creators
export const loadRockets = () => async (dispatch) => {
  const res = await fetch(URL);
  const resJSON = await res.json();
  const state = resJSON.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  dispatch({ type: LOAD, state });
};
