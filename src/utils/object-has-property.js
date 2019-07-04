/**
 * @param {Object} object The object that you want to determine whether it has a given property.
 * @param {String|string} property The property that you want to determine whether it is contained in a given object.
 * @returns {Boolean|boolean} true or false (boolean)
 */
export const objectHasProperty = (object, property) => {
    return Object.prototype.hasOwnProperty.call(object, property);
};
