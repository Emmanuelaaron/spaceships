import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectMission, leaveMission } from '../redux/missions/missions';

const JoinLeaveBtn = ({ reserved, id }) => {
  const dispatch = useDispatch();
  const addMissionToStore = (e) => {
    e.preventDefault();

    dispatch(selectMission(id));
  };

  const leaveMissionToStore = (e) => {
    e.preventDefault();

    dispatch(leaveMission(id));
  };

  if (reserved === true) {
    return (
      <Button onClick={leaveMissionToStore} variant="outline-danger">
        Leave Mission
      </Button>
    );
  }

  return (
    <Button onClick={addMissionToStore} variant="outline-secondary">
      Join Mission
    </Button>
  );
};
JoinLeaveBtn.propTypes = {
  reserved: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  id: PropTypes.string,
};

JoinLeaveBtn.defaultProps = {
  reserved: false,
  id: 'default-id',
};
export default JoinLeaveBtn;
