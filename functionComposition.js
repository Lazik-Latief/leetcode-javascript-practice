/**
 * LeetCode: Function Composition
 *
 * Problem:
 * Given an array of functions [f1, f2, f3, ..., fn],
 * return a new function that applies them in reverse order.
 *
 * Example:
 * functions = [f, g, h]
 * result(x) = f(g(h(x)))
 *
 * If the array is empty → return identity function: f(x) = x
 */

// ===============================
// METHOD 1: Simple Loop Approach
// ===============================

var compose = function(functions) {
    // If no functions exist, return identity function
    if (functions.length === 0) {
        return function(x) {
            return x;
        };
    }

    // Return a new function
    return function(x) {
        let result = x;

        // Apply functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    };
};

/*
🧠 How this works:
- Start with input x
- Apply last function first
- Pass result to previous function
- Continue until all functions are applied
*/

// ===============================
// METHOD 2: Cleaner Functional Style
// ===============================

var composeOptimized = function(functions) {
    return function(x) {
        let value = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            value = functions[i](value);
        }

        return value;
    };
};

/*
🧠 Key idea:
Function composition always runs RIGHT → LEFT
Last function executes first
*/

// ===============================
// Example Test
// ===============================

const fn = compose([
    x => x + 1,
    x => x * 2,
    x => x - 3
]);

console.log(fn(4));
// Step by step:
// h(x) = 4 - 3 = 1
// g(x) = 1 * 2 = 2
// f(x) = 2 + 1 = 3
// Output: 3


// Core Takeaways
// Function composition runs right to left
// Empty function list → return identity function
// This builds strong understanding for:
// Closures
// Higher-order functions
// Functional programming
// React hooks & middleware logic