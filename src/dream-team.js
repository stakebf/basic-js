const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }

  return members.sort().map(item => {
    if (typeof item === 'string') {
      return item.trim().toUpperCase()[0];
    }
    return '';
  }).sort().join('')
};
