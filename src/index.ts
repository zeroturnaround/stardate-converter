const STAR_TREK_EPOCH: number = 2323;

/**
 * Converts given date into a stardate.
 *
 * Formula is based on http://www.wikihow.com/Calculate-Stardates
 *
 * @param {Date} date
 * @return {Number} stardate
 */
export default (date: Date = new Date()): number => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDate();

    return round(starYear(year) + starDay(year, month, day));
};

const starYear = (year: number): number => {
    return 1000 * (year - STAR_TREK_EPOCH);
}

const starDay = (year: number, month: number, day: number): number => {
    return 1000 / daysInYear(year) * dayOfYear(year, month, day);
}

const daysInYear = (year: number): number => {
    return isLeapYear(year) ? 366 : 365;
}

const dayOfYear = (year: number, month: number, day: number): number => {
    let dayOfYear: number = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month] + day - 1;

    if (month >= 2 && isLeapYear(year)) {
        dayOfYear ++;
    }
    return dayOfYear;
}

const isLeapYear = (year: number): boolean => {
    return new Date(year, 1, 29).getMonth() === 1;
}

// Stardates are usually quoted to two decimal places.
const round = (number: number): number => {
    return Math.round(number * 100) / 100;
}
