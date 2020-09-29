const CustomError = require('../extensions/custom-error');

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const quantitySteps = 2 ** disksNumber - 1;
  return {
    turns: quantitySteps,
    seconds: Math.floor(quantitySteps / (turnsSpeed / 3600)),
  };
};
