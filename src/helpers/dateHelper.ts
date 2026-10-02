/**
 * Function takes a date as a string and validates that it can be parsed by Date.parse()
 * It returns a true or false, great for asserting of the data is properly formatted.
 */
export function isValidDate(date: string) {
    return !!Date.parse(date);
}

/**
 * Function takes a Date and a number of days to add/subtract from today's date
 * if you need to subtract days pass a negative number
 *
 * example: -1 wil return yesterday's date while passing 1 will return tomorrow
 *
 * let checkOutString = stringDateByDays(today, 5);
 * console.log(checkOutString) // from today + 5
 */
export function getFutureDate(dateStr: string, days = 0) {
    // Parsing a string to representation of a date
    let parse = Date.parse(dateStr)

    // Converting to date object
    let dateNew = new Date(parse);

    // Add or subtract the day
    dateNew.setDate(dateNew.getDate() + days);

    return dateNew.toISOString().split('T')[0];
}

export function getToday() {
    return new Date().toISOString().split('T')[0];
}

// Returns the current day.
export function getCurrentDay() {
    return new Date().getDate();
}

// Returns the current month.
export function getCurrentMonth() {
    return new Date().getMonth();
}

// Returns the current year as a four-digit number (e.g. 2026).
export function getCurrentYear() {
    return new Date().getFullYear();
}