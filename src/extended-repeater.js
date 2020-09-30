const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {
  repeatTimes,
  separator = '+',
  addition,
  additionRepeatTimes,
  additionSeparator = '|'
}) {
  let result = '';
  if (addition !== undefined) {
    result += addition;
  }
  if (additionRepeatTimes) {
    result = `${result}${additionSeparator}`.repeat(additionRepeatTimes).slice(0, -(parseInt(additionSeparator
      .length)));
  }
  if (repeatTimes) {
    const temp = [];
    for (let i = 0; i <= repeatTimes - 1; i++) {
      if (i !== repeatTimes - 1) {
        temp.push(`${str}${result}${separator}`);
      } else {
        temp.push(`${str}${result}`);
      }
    }
    result = temp.join('');
  } else {
    result = `${str}${result}`;
  }
  return result;
};
