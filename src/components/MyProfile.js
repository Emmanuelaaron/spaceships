import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Missions</Card.Header>
        {missions.map((mission) => (
          <ListGroup key={mission.mission_id}>
            {mission.reserved && <ListGroup.Item>{mission.mission_name}</ListGroup.Item>}
          </ListGroup>
        ))}
      </Card>
    </Container>
  );
};

export default MyProfile;
