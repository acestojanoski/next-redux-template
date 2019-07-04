/**
 * @param {any} value The value that you want to determine whether it is an object.
 * @returns {boolean} true or false (boolean)
 */

export const isObject = (value) => {
    if (value instanceof Object || typeof value === 'object') {
        return true;
    }
    return false;
};
