import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const dragons = useSelector((state) => state.dragons);
  const rockets = useSelector((state) => state.rockets);

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
              >
                {filteredRocket.name}
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
              >
                {filteredMission.mission_name}
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
              >
                {filteredDragon.name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default MyProfile;
