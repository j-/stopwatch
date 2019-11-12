const NoSleep = require('nosleep.js');

const nosleep = new NoSleep();

export const enable = () => { nosleep.enable(); };
export const disable = () => { nosleep.disable(); };
