const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes;
  const separator = options.separator || '+';
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator || '';

  let result = '';

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i += 1) {
      result += String(str);

      if (String(addition)) {
        for (let j = 0; j < additionRepeatTimes; j += 1) {
          result += String(addition);

          if (j < additionRepeatTimes - 1) {
            result += additionSeparator;
          }
        }
      }

      if (i < repeatTimes - 1) {
        result += separator;
      }
    }
  } else {
    result += str;

    if (addition) {
      result += addition;
    }

  }

  return result;
};
  