const CustomError = require("../extensions/custom-error");

const sequencesAdapter = {
  '--discard-next': true,
  '--discard-prev': true,
  '--double-prev': true,
  '--double-next': true,
}
module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  const fn = (acc, rest) => {
    const [item, ...newRest] = rest;

    if (rest.length === 0) {
      return acc;
    }

    switch (item) {
      case '--discard-next':
        return fn([...acc, item], newRest.slice(1));
      case '--discard-prev':
        return fn([...acc.slice(0, acc.length - 1), item], newRest);
      case '--double-next':
        return newRest.length > 0 ? fn([...acc, item], [newRest[0], ...newRest]) : fn([...acc, item], newRest);
      case '--double-prev':
        return acc.length > 0 ? fn([...acc, acc[acc.length - 1], item], newRest) : fn([...acc, item], newRest);
      default: 
        return fn([...acc, item], newRest);
    }
    
  };

  return fn([], arr).filter(item => !sequencesAdapter[item]);
};
