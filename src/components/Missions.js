import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import { loadMissions } from '../redux/missions/missions';
import JoinLeaveBtn from './JoinLeaveBtn';

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
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="align-middle">
                {' '}
                {mission.reserved ? (
                  <Badge bg="primary">Active Member</Badge>
                ) : (
                  <Badge bg="secondary">NOT A MEMBER</Badge>
                )}
                {' '}
              </td>
              <td className="align-middle">
                <JoinLeaveBtn reserved={mission.reserved} id={mission.mission_id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Missions;
