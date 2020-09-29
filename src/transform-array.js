const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw 'Its not an array';
  }
  if (arr.length === 0) {
    return arr;
  }

  let tempArr = [];

  for (let i = 0; i < arr.length; ) {
    if (
      (arr[i] === '--discard-next' && arr[i + 2] === '--double-prev') ||
      (arr[i] === '--discard-next' && arr[i + 2] === '--discard-prev')
    ) {
      i += 3;
      continue;
    }
    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      i += 2;
      continue;
    } else if (arr[i] === '--discard-next' && i === arr.length - 1) {
      break;
    }

    if (arr[i] === '--discard-prev' && i !== 0) {
      tempArr.splice(tempArr.length - 1, 1);
      i++;
      continue;
    } else if (arr[i] === '--discard-prev' && i === 0) {
      i++;
      continue;
    }

    if (arr[i] === '--double-next' && i !== arr.length - 1) {
      tempArr.push(arr[i + 1]);
      i++;
      continue;
    } else if (arr[i] === '--double-next' && i === arr.length - 1) {
      break;
    }

    if (arr[i] === '--double-prev' && i !== 0) {
      tempArr.push(arr[i - 1]);
      i++;
      continue;
    } else if (arr[i] === '--double-prev' && i === 0) {
      i++;
      continue;
    }

    tempArr.push(arr[i]);
    i++;
  }

  // console.log(`Input ${JSON.stringify(arr)}
  // My ${JSON.stringify(tempArr)}`);

  return tempArr;
};
