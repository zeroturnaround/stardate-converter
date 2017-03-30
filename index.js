var STAR_TREK_EPOCH = 2323;

/**
 * Converts given date into a stardate.
 *
 * Formula is based on http://www.wikihow.com/Calculate-Stardates
 *
 * @param {Date} date
 * @return {Number} stardate
 */
module.exports = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    return round(starYear(year) + starDay(year, month, day));
};

function starYear(year) {
    return 1000 * (year - STAR_TREK_EPOCH);
}

function starDay(year, month, day) {
    return 1000 / daysInYear(year) * dayOfYear(year, month, day);
}

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function dayOfYear(year, month, day) {
    var dayOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month] + day - 1;

    if (month >= 2 && isLeapYear(year)) {
        dayOfYear ++;
    }
    return dayOfYear;
}

function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
}

// Stardates are usually quoted to two decimal places.
function round(number) {
    return Math.round(number * 100) / 100;
}
