
const repeater = require('./src/extended-repeater');

// const chain = new chainMaker();
// console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));
console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }));