import rocketReducer, { loadRockets, reserveRocket, cancelRocketReservation } from '../redux/rockets/rockets';

describe('Unit tests for redux/rockets', () => {
  jest.mock('../redux/rockets/rockets');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };

  const LOAD = 'spaceships/rockets/LOAD';
  const RESERVE_ROCKET = 'spaceships/rockets/RESERVE_ROCKET';
  const CANCEL_ROCKET_RESERVATION = 'spaceships/rockets/CANCEL_ROCKET_RESERVATION';

  const actionLoadMock = {
    type: LOAD,
    state: [{
      id: 'rocket1',
      name: 'Rocket 1',
    }],
  };
  describe('reducers', () => {
    it('returns the correct state for LOAD action', () => {
      expect(rocketReducer([], { type: LOAD, state: actionLoadMock })).toEqual(actionLoadMock);
    });
    it('returns the correct state for RESERVE_ROCKET action', () => {
      const expectedOutputState = [{
        id: 'rocket1',
        name: 'Rocket 1',
        reserved: true,
      }];
      expect(rocketReducer(actionLoadMock.state, { type: RESERVE_ROCKET, id: 'rocket1' })).toEqual(expectedOutputState);
    });
    it('returns the correct state for CANCEL_ROCKET_RESERVATION action', () => {
      const expectedOutputState = [{
        id: 'rocket1',
        name: 'Rocket 1',
        reserved: false,
      }];
      expect(rocketReducer(actionLoadMock.state, { type: CANCEL_ROCKET_RESERVATION, id: 'rocket1' })).toEqual(expectedOutputState);
    });
  });

  describe('action creators', () => {
    it('returns the correct action for \'loadRockets\' thunk', async () => {
      await loadRockets()(dispatchMock);
      expect(expectedOutputAction.type).toEqual(LOAD);
      expect(expectedOutputAction.state).toEqual(expect.arrayContaining([expect.any(Object)]));
    });
    it('returns the correct action for \'reserveRocket\' function', () => {
      expect(reserveRocket('rocket1').type).toEqual(RESERVE_ROCKET);
    });
    it('returns the correct action for \'cancelRocketReservation\' function', () => {
      expect(cancelRocketReservation('rocket1').type).toEqual(CANCEL_ROCKET_RESERVATION);
    });
  });
});
