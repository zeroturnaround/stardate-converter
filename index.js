const BASE_YEAR = 2323;

function isLeapYear(year) {
    return new Date(year, 1, 29).getMonth() === 1;
}

function round(number) {
    return Math.round(number * 100) / 100;
}

function monthNumber(year, month) {
    const number = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month];

    return month >= 2 && isLeapYear(year) ? number + 1 : number;
}

module.exports = {
    /**
     * Converts given date into a stardate
     *
     * Formula is based on http://www.wikihow.com/Calculate-Stardates
     *
     * @param {Date} date
     * @return {Number} stardate
     */
    convert: function(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const daysInYear = isLeapYear(year) ? 366 : 365;

        const starYear = 1000 * (year - BASE_YEAR);

        return round(starYear + 1000 / daysInYear * (monthNumber(year, month) + day - 1));
    }
};
