const URL = 'https://api.spacexdata.com/v3/rockets';

// Actions
const LOAD = 'spaceships/rockets/LOAD';
const RESERVE_ROCKET = 'spaceships/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET_RESERVATION = 'spaceships/rockets/CANCEL_ROCKET_RESERVATION';

// Reducer
export default (state = [], action) => {
  switch (action.type) {
    case (LOAD):
      return action.state;
    case (RESERVE_ROCKET): {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case (CANCEL_ROCKET_RESERVATION): {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }
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

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelRocketReservation = (id) => ({
  type: CANCEL_ROCKET_RESERVATION,
  id,
});
