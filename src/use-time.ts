import * as React from 'react';

const DEFAULT_INTERVAL = 1000;

export const useTime = (interval: number = DEFAULT_INTERVAL) => {
  const [time, setTime] = React.useState(Date.now());
  React.useEffect(() => {
    const clock = setInterval(() => setTime(Date.now()), interval);
    return () => clearInterval(clock);
  });
  return time;
};
