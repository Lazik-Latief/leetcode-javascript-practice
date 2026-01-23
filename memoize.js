/**
 * memoize(fn)
 * -------------------------
 * Takes a function as input
 * Returns a new memoized version of that function
 *
 * Memoized function:
 * - Remembers previous results
 * - Avoids recalculating for same inputs
 */

/**
 * @param {Function} fn  → the original function (sum, fib, factorial)
 * @return {Function}    → a new memoized function
 */
var memoize = function (fn) {

    // -----------------------------------------
    // STEP 1: Create a cache object
    // -----------------------------------------
    // This object will store:
    // key   → function arguments
    // value → result returned by fn
    const cache = {};

    // -----------------------------------------
    // STEP 2: Return a new function
    // -----------------------------------------
    // This returned function replaces the original fn
    // It can accept ANY number of arguments
    return function (...args) {

        // -----------------------------------------
        // STEP 3: Create a unique key for arguments
        // -----------------------------------------
        // args is an array like [a, b] or [n]
        // JSON.stringify converts it into a string
        // Example:
        // [2,3] → "[2,3]"
        // [3,2] → "[3,2]" (different key, order matters)
        const key = JSON.stringify(args);

        // -----------------------------------------
        // STEP 4: Check if result is already cached
        // -----------------------------------------
        if (key in cache) {
            // If cached, return stored result
            // fn is NOT called again
            return cache[key];
        }

        // -----------------------------------------
        // STEP 5: Call the original function
        // -----------------------------------------
        // Spread args so fn receives parameters normally
        // Example: fn(2, 3) or fn(5)
        const result = fn(...args);

        // -----------------------------------------
        // STEP 6: Store result in cache
        // -----------------------------------------
        cache[key] = result;

        // -----------------------------------------
        // STEP 7: Return the computed result
        // -----------------------------------------
        return result;
    };
};

