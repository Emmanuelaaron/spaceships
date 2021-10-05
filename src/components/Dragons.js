import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import Card from 'react-bootstrap/Card';
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
    <div className="d-flex flex-column flex-md-row align-items-center mt-5">
      {dragons.map((dragon) => (
        <Card
          bg="light"
          key={dragon.id}
          text="dark"
          style={{ width: '50vw' }}
          className="m-2 align-self-stretch"
        >
          <Card.Img variant="left" src={dragon.flickr_images[0]} />
          <Card.Header>{dragon.type}</Card.Header>
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title>{dragon.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Dragons;
