import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { loadMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  const loadMissionsAction = bindActionCreators(loadMissions, dispatch);
  useEffect(() => {
    if (missions.length === 0) loadMissionsAction();
    return () => null;
  }, []);
  return <div className="profile">coming soon</div>;
};
export default Missions;
