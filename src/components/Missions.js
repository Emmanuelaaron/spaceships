import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { loadMissions, selectMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length === 0) dispatch(loadMissions());
    return () => null;
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
            const addMissionToStore = (e) => {
              e.preventDefault();

              dispatch(selectMission(mission.mission_id));
            };
            return (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  {' '}
                  <Button variant="secondary">Not a Member</Button>
                  {' '}
                </td>
                <td>
                  <Button onClick={addMissionToStore} variant="outline-secondary">
                    Join Mission
                  </Button>
                  {' '}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default Missions;
