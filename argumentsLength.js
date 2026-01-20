/**
 * Problem:
 * Return the number of arguments passed to a function.
 *
 * Solution:
 * Use rest parameter (...) to collect arguments into an array.
 * Then return the array length.
 */

function argumentsLength(...args) {
  // args is an array containing all passed arguments
  return args.length;
}

/* =========================
   TEST CASES
   ========================= */

// Test 1: One argument
console.log(argumentsLength(5));
// Output: 1

// Test 2: Multiple arguments
console.log(argumentsLength(1, 2, 3));
// Output: 3

// Test 3: No arguments
console.log(argumentsLength());
// Output: 0

// Test 4: Different data types
console.log(argumentsLength("a", true, {}, [], null));
// Output: 5

// Test 5: Functions and arrays as arguments
console.log(argumentsLength(() => {}, [1, 2], "hello"));
// Output: 3
