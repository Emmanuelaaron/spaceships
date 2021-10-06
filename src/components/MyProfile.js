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
        <Card.Header>Missions</Card.Header>
        {missions
          .filter((mission) => mission.reserved === true)
          .map((filteredMission) => (
            <ListGroup key={filteredMission.mission_id}>
              <ListGroup.Item>{filteredMission.mission_name}</ListGroup.Item>
            </ListGroup>
          ))}
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Rockets</Card.Header>
        {rockets
          .filter((rocket) => rocket.reserved === true)
          .map((filteredRocket) => (
            <ListGroup key={filteredRocket.id}>
              <ListGroup.Item>{filteredRocket.name}</ListGroup.Item>
            </ListGroup>
          ))}
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Dragons</Card.Header>
        {dragons
          .filter((dragon) => dragon.reserved === true)
          .map((filteredDragon) => (
            <ListGroup key={filteredDragon.id}>
              <ListGroup.Item>{filteredDragon.name}</ListGroup.Item>
            </ListGroup>
          ))}
      </Card>
    </Container>
  );
};

export default MyProfile;
