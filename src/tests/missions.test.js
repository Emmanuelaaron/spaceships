import missionReducer, {
  loadMissions,
  selectMission,
  leaveMission,
} from '../redux/missions/missions';

describe('Unit tests for missions', () => {
  jest.mock('../redux/missions/missions');
  let expectedOutputAction;
  const dispatchMock = (input) => {
    expectedOutputAction = input;
  };

  const LOAD = 'spaceships/missions/LOAD';
  const SELECT = 'spaceships/missions/SELECT';
  const LEAVE = 'spaceships/missions/LEAVE';

  const actionLoadMock = {
    type: LOAD,
    state: [
      {
        mission_id: 'mission1',
        mission_name: 'name',
      },
    ],
  };
  describe('reducers', () => {
    it('returns the correct state for LOAD action', () => {
      expect(missionReducer([], { type: LOAD, state: actionLoadMock })).toEqual(actionLoadMock);
    });
    it('returns the correct state for SELECT action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
          reserved: true,
        },
      ];
      expect(missionReducer(actionLoadMock.state, { type: SELECT, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
    it('returns the correct state for LEAVE action', () => {
      const expectedOutputState = [
        {
          mission_id: 'mission1',
          mission_name: 'name',
          reserved: false,
        },
      ];
      expect(missionReducer(actionLoadMock.state, { type: LEAVE, payload: 'mission1' })).toEqual(
        expectedOutputState,
      );
    });
  });
});
