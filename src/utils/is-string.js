/**
 * @param {any} value The value that you want to determine whether it is a string.
 * @returns {boolean} true or false (boolean)
 */

export const isString = value => {
    if (Object.prototype.toString.call(value) === '[object String]') {
        return true;
    }
    return false;
};
