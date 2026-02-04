/**
 * LeetCode 2727 - Is Object Empty
 * Given an object or an array, return if it is empty.
 */

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0;
};

// Test examples
console.log(isEmpty({x: 5, y: 42})); // false
console.log(isEmpty({}));             // true
console.log(isEmpty([]));             // true
console.log(isEmpty([1,2,3]));        // false
