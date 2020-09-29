const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
    throw new Error('');
  }

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const currentDate = new Date(date).getMonth() + 1;
  const getCurrentSeason =
    currentDate === 12 || currentDate <= 2 ?
    seasons[0] :
    currentDate >= 3 && currentDate <= 5 ?
    seasons[1] :
    currentDate >= 6 && currentDate <= 8 ?
    seasons[2] :
    currentDate >= 9 && currentDate <= 11 ?
    seasons[3] :
    seasons;

  // spring, summer, autumn (fall), winter
  return getCurrentSeason;
};
