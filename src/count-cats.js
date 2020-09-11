const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catsSymbol = '^^';
  let catsCount = 0;

  for (let arr of matrix) {
    for (let symbolInArr of arr) {
      if (symbolInArr === catsSymbol) {
        catsCount += 1;
      }
    }
  }

  return catsCount;
};
