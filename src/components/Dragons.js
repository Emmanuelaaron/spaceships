import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
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
    <div className="profile">coming soon</div>
  );
};

export default Dragons;
