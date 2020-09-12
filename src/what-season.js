const CustomError = require("../extensions/custom-error");

const seasonsAdapter = {
  1: 'winter',
  2: 'winter',
  3: 'spring',
  4: 'spring',
  5: 'spring',
  6: 'summer',
  7: 'summer',
  8: 'summer',
  9: 'autumn',
  10: 'autumn',
  11: 'autumn',
  12: 'winter',
};

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!date instanceof Date || date.hasOwnProperty('getMonth')) {
    throw new Error();
  }

  return seasonsAdapter[date.getMonth() + 1];
};
