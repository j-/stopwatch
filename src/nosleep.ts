const NoSleep = require('nosleep.js');

const nosleep = new NoSleep();

export const enable = () => {
  try {
    nosleep.enable();
    return () => { nosleep.disable(); };
  } catch (err) {
    // Ignore error and return no-op.
    return () => {};
  }
};
