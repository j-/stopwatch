import * as React from 'react';
import Time from './Time';
import Stopwatch from './Stopwatch';
import './SplitClock.css';

const SplitClock: React.FC = () => {
  return (
    <div className="SplitClock">
      <div className="SplitClock-time">
        <Time />
      </div>
      <div className="SplitClock-stopwatch">
        <Stopwatch />
      </div>
    </div>
  );
};

export default SplitClock;
