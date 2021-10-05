import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { loadDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const loadDragonsAction = bindActionCreators(loadDragons, dispatch);
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) loadDragonsAction();
    return () => null;
  }, []);

  return (
    <div className="d-flex flex-column flex-md-row mt-5 container align-items-md-start align-items-center align-items-md-stretch">
      {dragons.map((dragon) => (
        <Card
          bg="light"
          key={dragon.id}
          text="dark"
          style={{ width: '50vw', minWidth: '20rem' }}
          className="m-2"
        >
          <Card.Img variant="left" src={dragon.flickr_images[0]} />
          <Card.Header>{dragon.type}</Card.Header>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title>{dragon.name}</Card.Title>
            <Button variant="primary">Reserve Dragon</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Dragons;
