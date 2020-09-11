const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const res = members.reduce((acc, item) => {
    if (typeof item !== 'string') {
      return acc;
    }

    const firstLetter = item.trim()[0];
    return acc ? `${acc}${firstLetter}` : firstLetter;
  }, null);

  return res ? res.toLowerCase().split('').sort().join('').toUpperCase() : res;
};
