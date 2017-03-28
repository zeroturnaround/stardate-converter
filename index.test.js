const stardateConverter = require("./index");

describe("convert()", () => {
    function convert(date) {
        return stardateConverter.convert(new Date(date.year, date.month, date.day));
    }

    it("converts anti-leap year dates with ease", () => {
        expect(convert({year: 2022, month: 11, day: 30})).toBe(-300005.48);
        expect(convert({year: 2017, month: 9, day: 24})).toBe(-305189.04);
        expect(convert({year: 2015, month: 4, day: 15})).toBe(-307632.88);
        expect(convert({year: 2009, month: 1, day: 1})).toBe(-313915.07);
    });

    it("converts leap year dates with ease", () => {
        expect(convert({year: 2020, month: 11, day: 30})).toBe(-302005.46);
        expect(convert({year: 2016, month: 9, day: 24})).toBe(-306188.52);
        expect(convert({year: 2012, month: 4, day: 15})).toBe(-310631.15);
        expect(convert({year: 2008, month: 1, day: 1})).toBe(-314915.3);
    });
});
