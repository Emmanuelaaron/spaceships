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
  return (
    <div className="profile">
      {missions.map((mission) => (
        <div key={mission.id}>
          <h2>{mission.mission_name}</h2>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Missions;
