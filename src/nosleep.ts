const NoSleep = require('nosleep.js');

const nosleep = new NoSleep();

export const enable = () => {
  nosleep.enable();
  return () => nosleep.disable();
};
