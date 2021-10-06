import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { loadRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const loadRocketsAction = bindActionCreators(loadRockets, dispatch);
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) loadRocketsAction();
    return () => null;
  }, []);

  return (
    <div className="profile">coming soon</div>
  );
};

export default Rockets;
