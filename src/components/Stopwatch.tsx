import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../store/selector';
import { getStopwatchFormatted, getStartStopButtonText } from '../store';
import { toggleTimer, restartTimer } from '../store/actions';
import { STOPWATCH_INTERVAL } from '../constants';
import { useTime } from '../use-time';
import './Stopwatch.css';

const Stopwatch: React.FC = () => {
  const time = useTime(STOPWATCH_INTERVAL);
  const dispatch = useDispatch();
  const formattedCount = useSelector((state) => getStopwatchFormatted(state, time));
  const buttonText = useSelector(getStartStopButtonText);

  const onClickStartStop: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(toggleTimer());
  };

  const onClickReset: React.MouseEventHandler = (e) => {
    e.preventDefault();
    dispatch(restartTimer());
  };

  return (
    <div className="Stopwatch">
      <div className="Stopwatch-count">
        {formattedCount}
      </div>
      <div className="Stopwatch-actions">
        <button type="button" onClick={onClickStartStop}>
          {buttonText}
        </button>
        <button type="button" onClick={onClickReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
