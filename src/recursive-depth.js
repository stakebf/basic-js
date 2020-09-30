const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        counter = Math.max(this.calculateDepth(item), counter);
      }
    });
    return counter + 1;
  }
};
