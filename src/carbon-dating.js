const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  const sampleActivityNumber = parseFloat(sampleActivity);

  if (Number.isNaN(sampleActivityNumber)) {
    return false;
  }

  if (sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / k);
};

