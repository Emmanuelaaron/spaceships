import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { cancelDragonReservation } from '../redux/dragons/dragons';
import { cancelRocketReservation } from '../redux/rockets/rockets';
import { leaveMission } from '../redux/missions/missions';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const dragons = useSelector((state) => state.dragons);
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const cancelDragonAction = bindActionCreators(cancelDragonReservation, dispatch);
  const cancelRocketAction = bindActionCreators(cancelRocketReservation, dispatch);
  const leaveMissionAction = bindActionCreators(leaveMission, dispatch);

  return (
    <Container className="d-flex">
      <Card style={{ width: '18rem' }}>
        <Card.Header>Rockets</Card.Header>
        <ListGroup>
          {!rockets.find((rocket) => rocket.reserved)
            && (
            <ListGroup.Item className="fst-italic text-muted">
              No Rockets reserved!
            </ListGroup.Item>
            )}
          {rockets
            .filter((rocket) => rocket.reserved === true)
            .map((filteredRocket) => (
              <ListGroup.Item
                key={filteredRocket.id}
                className="d-flex justify-content-between align-items-center"
              >
                {filteredRocket.name}
                <Button
                  size="sm"
                  className="py-0"
                  onClick={() => cancelRocketAction(filteredRocket.id)}
                >
                  Cancel
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Missions</Card.Header>
        <ListGroup>
          {!missions.find((mission) => mission.reserved)
            && (
            <ListGroup.Item className="fst-italic text-muted">
              No Missions reserved!
            </ListGroup.Item>
            )}
          {missions
            .filter((mission) => mission.reserved === true)
            .map((filteredMission) => (
              <ListGroup.Item
                key={filteredMission.mission_id}
                className="d-flex justify-content-between align-items-center"
              >
                {filteredMission.mission_name}
                <Button
                  size="sm"
                  className="py-0"
                  onClick={() => leaveMissionAction(filteredMission.mission_id)}
                >
                  Cancel
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Dragons</Card.Header>
        <ListGroup>
          {!dragons.find((dragon) => dragon.reserved)
            && (
            <ListGroup.Item className="fst-italic text-muted">
              No Dragons reserved!
            </ListGroup.Item>
            )}
          {dragons
            .filter((dragon) => dragon.reserved === true)
            .map((filteredDragon) => (
              <ListGroup.Item
                key={filteredDragon.id}
                className="d-flex justify-content-between align-items-center"
              >
                {filteredDragon.name}
                <Button
                  size="sm"
                  className="py-0"
                  onClick={() => cancelDragonAction(filteredDragon.id)}
                >
                  Cancel
                </Button>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default MyProfile;
