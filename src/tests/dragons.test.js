import dragonReducers, { loadDragons, reserveDragon, cancelDragonReservation } from '../redux/dragons/dragons';

describe('Unit tests for redux/dragons', () => {
  jest.mock('../redux/dragons/dragons');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };

  const LOAD = 'spaceships/dragons/LOAD';
  const RESERVE_DRAGON = 'spaceships/dragons/RESERVE_DRAGON';
  const CANCEL_DRAGON_RESERVATION = 'spaceships/dragons/CANCEL_DRAGON_RESERVATION';

  const actionLoadMock = {
    type: LOAD,
    state: [{
      id: 'dragon1',
      name: 'Dragon 1',
    }],
  };
  describe('reducers', () => {
    it('returns the correct state for LOAD action', () => {
      expect(dragonReducers([], { type: LOAD, state: actionLoadMock })).toEqual(actionLoadMock);
    });
    it('returns the correct state for RESERVE_DRAGON action', () => {
      const expectedOutputState = [{
        id: 'dragon1',
        name: 'Dragon 1',
        reserved: true,
      }];
      expect(dragonReducers(actionLoadMock.state, { type: RESERVE_DRAGON, id: 'dragon1' })).toEqual(expectedOutputState);
    });
    it('returns the correct state for CANCEL_DRAGON_RESERVATION action', () => {
      const expectedOutputState = [{
        id: 'dragon1',
        name: 'Dragon 1',
        reserved: false,
      }];
      expect(dragonReducers(actionLoadMock.state, { type: CANCEL_DRAGON_RESERVATION, id: 'dragon1' })).toEqual(expectedOutputState);
    });
  });

  describe('action creators', () => {
    it('returns the correct action for \'loadDragons\' thunk', async () => {
      await loadDragons()(dispatchMock);
      expect(expectedOutputAction.type).toEqual(LOAD);
      expect(expectedOutputAction.state).toEqual(expect.arrayContaining([expect.any(Object)]));
    });
    it('returns the correct action for \'reserveDragon\' function', () => {
      expect(reserveDragon('dragon1').type).toEqual(RESERVE_DRAGON);
    });
    it('returns the correct action for \'cancelDragonReservation\' function', () => {
      expect(cancelDragonReservation('dragon1').type).toEqual(CANCEL_DRAGON_RESERVATION);
    });
  });
});
