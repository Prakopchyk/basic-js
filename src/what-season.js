const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date == null) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getUTCDay();
  }
  catch {
    throw new Error('Invalid date!');
  }

  let givenMonth = date.getMonth();
  if (typeof givenMonth !== 'number') {
    return false;
  }

  if (!date) {
    return 'Unable to determine the time of year!';
  }
  else {
    if (givenMonth === 11 || givenMonth < 2) { return 'winter'; }
    if (givenMonth >= 2 && givenMonth < 5) { return 'spring'; }
    if (givenMonth >= 5 && givenMonth < 8) { return 'summer'; }
    if (givenMonth >= 8 && givenMonth < 11) { return 'autumn|fall'; }
  }
}

module.exports = {
  getSeason
};
