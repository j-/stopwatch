import * as React from 'react';
import formatDate from 'date-fns/format';
import { TIME_INTERVAL, TIME_FORMAT } from '../constants';
import { useTime } from '../use-time';
import './Time.css';

const Time: React.FC = () => {
  const time = useTime(TIME_INTERVAL);

  return (
    <div className="Time">
      {formatDate(time, TIME_FORMAT)}
    </div>
  );
};

export default Time;
