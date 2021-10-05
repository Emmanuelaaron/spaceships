const URL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const LOAD = 'spaceships/dragons/LOAD';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case (LOAD):
      return action.state;
    default: return state;
  }
};

// Action Creators
export const loadDragons = () => async (dispatch) => {
  const res = await fetch(URL);
  const resJSON = await res.json();
  const state = resJSON.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images,
  }));
  dispatch({ type: LOAD, state });
};
