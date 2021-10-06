import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { loadRockets, reserveRocket, cancelRocketReservation } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(loadRockets, dispatch);
  const reserveRocketsAction = bindActionCreators(reserveRocket, dispatch);
  const cancelRocketReservationAction = bindActionCreators(cancelRocketReservation, dispatch);
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) loadRocketsAction();
    return () => null;
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <Card
          bg="ligh"
          key={rocket.id}
          text="dark"
          className="m-2 row flex-row align-items-center p-4"
        >
          <div className="col-sm-12 col-md-4 col-lg-3 text-center ">
            <Card.Img variant="left" src={rocket.flickr_images[0]} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8 d-flex flex-column card-content pt-sm-3 pt-md-0">
            <h1 className="rocket-heading">{rocket.name}</h1>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <p>{rocket.description}</p>
            </Card.Body>
            <Button
              variant={rocket.reserved ? 'outline-secondary' : 'primary'}
              onClick={
                () => {
                  if (rocket.reserved) {
                    cancelRocketReservationAction(rocket.id);
                  } else reserveRocketsAction(rocket.id);
                }
              }
              style={{ width: '140px' }}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Rockets;
