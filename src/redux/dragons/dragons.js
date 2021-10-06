const URL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const LOAD = 'spaceships/dragons/LOAD';
const RESERVE_DRAGON = 'spaceships/dragons/RESERVE_DRAGON';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case (LOAD):
      return action.state;
    case (RESERVE_DRAGON): {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.id) return dragon;
        return { ...dragon, reserved: true };
      });
      return newState;
    }
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

export const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  id,
});
