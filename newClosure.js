/**
 * LeetCode 2666: Allow One Function Call
 *
 * PROBLEM:
 * You are given a function `fn`.
 * You must return a NEW function that:
 *  - Calls `fn` only ONE time
 *  - On the first call → returns fn’s result
 *  - On all future calls → returns undefined
 *
 * IMPORTANT CONCEPT USED:
 * 👉 Closures (function remembers its outer variables)
 */


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {

    // This variable lives inside the closure
    // It remembers whether fn has already been called
    let called = false;

    // We return a new function (wrapper around fn)
    return function (...args) {

        // If fn was already called before,
        // do NOT call it again
        if (called) {
            return undefined;
        }

        // Mark fn as called
        called = true;

        // Call the original function with all arguments
        // Spread operator (...) allows any number of inputs
        return fn(...args);
    };
};


/* ---------------------------------------
   EXAMPLE USAGE (for understanding)
---------------------------------------- */

// Original function
let fn = (a, b, c) => a + b + c;

// Create a function that can run only once
let onceFn = once(fn);

// First call → works
console.log(onceFn(1, 2, 3)); // Output: 6

// Second call → blocked
console.log(onceFn(2, 3, 6)); // Output: undefined


/*
🧠 WHAT YOU LEARNED HERE:

1. Functions can return other functions
2. Inner functions remember variables (closure)
3. State (called) is preserved between calls
4. Spread operator handles dynamic arguments
5. Useful in real-world cases like:
   - Button click protection
   - API call throttling
   - Preventing duplicate submissions
*/
