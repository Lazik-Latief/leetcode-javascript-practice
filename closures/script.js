// // ===============================
// // Example 1: Basic Closure
// // ===============================

function outer() {
  // Local variable of outer function
  let name = "lazik";

  function inner() {
    // inner function can ACCESS 'name'
    // even after outer() has finished execution
    console.log(name);
  }

  // Returning the inner function
  return inner;
}

// outer();   ❌ sirf call karega, kuch print nahi hoga
// inner();   ❌ error: inner is not defined (scope ke bahar)

// outer() returns inner(), so store it in a variable
let fn = outer();

// Calling fn() still remembers 'name'
fn(); // lazik

// ===============================
// Example 2: Counter using Closure
// ===============================

function createCounter(n) {
  // 'n' is captured by the inner function
  return function () {
    // returns current value of n
    // then increments it for next call
    console.log(n++);

  };
}

// createCounter returns a function
const counter = createCounter(5);

// Each call remembers updated value of n
counter(); // 5
counter(); // 6
counter(); // 7

//
function counterFn() {
  let count = 0;

  return function() {
    count++;
    // return count;
    console.log(count);

  };
}

const c1 = counterFn();
c1(); // 1
c1(); // 2
c1(); // 3

//
function test() {
  let x = 10;
  return () => {
    x = x + 5;   // ✅ update x
    console.log(x);
  }
}

const fnc = test();
fnc(); // 15
fnc(); // 20

// This function takes one value and returns an object
function expect(val) {
  // We return an object that contains two functions
  return {
    // toBe checks if val is strictly equal to otherVal
    toBe(otherVal) {
      // If both values are exactly equal (===)
      if (val === otherVal) {
        // Return true when values match
        console.log("both values are same !!!");
        console.log(`${val} is equal to ${otherVal}`);

        return true;
      }

      // If values are NOT equal, return this message
      return console.log(`${val} is not equal to ${otherVal}`);
    },

    // notToBe checks if val is NOT strictly equal to otherVal
    notToBe(otherVal) {
      // If both values are different (!==)
      if (val !== otherVal) {
        // Return true when values are not equal
        console.log(`${val} is not equal to ${otherVal}`);

        return true;
      }

      // If values ARE equal, return this message
      return console.log(`${val} is  equal to ${otherVal}`);
    },
  };
}

// ---------------- TEST CASES ----------------

// Calls expect with value 5, then calls toBe(5)
// 5 === 5 → true
// console.log(expect(5).toBe(5));

// Calls expect with value 5, then calls toBe(10)
// 5 !== 10 → "Not Equal"
// console.log(expect(5).toBe(10));

// Calls expect with value 5, then calls notToBe(10)
// 5 !== 10 → true
// console.log(expect(5).notToBe(10));

// Calls expect with value 5, then calls notToBe(5)
// 5 === 5 → "Equal"
// console.log(expect(5).notToBe(5));

console.log(expect(4).toBe(4));
console.log(expect(42).notToBe(422));

console.log(expect(43).toBe(43));
console.log(expect(411).notToBe(422));

// // /**
//  * createCounter uses CLOSURE to remember values between function calls
//  * @param {number} init - initial value of the counter
//  * @returns {Object} - object with increment, decrement, reset functions
//  */
var createCounter = function (init) {

  // current value of the counter (can change)
  let current = init;

  // returning an object with 3 methods
  return {

    // increments current value by 1
    increment: function () {
      current++;          // increase value
      return current;     // return updated value
    },

    // decrements current value by 1
    decrement: function () {
      current--;          // decrease value
      return current;     // return updated value
    },

    // resets current value back to initial value
    reset: function () {
      current = init;     // set current to init
      return current;     // return reset value
    }
  };
};

/* ================== PRACTICE TEST (VS Code) ================== */

const counterN = createCounter(5);

console.log(counterN.increment()); // 6
console.log(counterN.increment()); // 7
console.log(counterN.decrement()); // 6
console.log(counterN.reset());     // 5

// 
/**
 * LeetCode 2635: Apply Transform Over Each Element in Array
 *
 * We must NOT use Array.map().
 * Instead, we manually loop over the array and apply the function.
 *
 * @param {number[]} arr - input array
 * @param {Function} fnn  - function to apply on each element
 * @return {number[]}    - new transformed array
 */
var map = function (arr, fn) {

  // Create an empty array to store transformed values
  const result = [];

  // Loop through each element of the input array
  for (let i = 0; i < arr.length; i++) {

    // Apply fn to current element and its index
    // fn(arr[i], i) returns the transformed value
    const transformedValue = fn(arr[i], i);

    // Push transformed value into result array
    result.push(transformedValue);
  }

  // Return the final transformed array
  return result;
};

/* ===================== PRACTICE TEST (VS Code) ===================== */

// Example input array
const arr = [1, 2, 3];

// Example function
const fnn = function (n, i) {
  // Adds index to value
  return n + i;
};

// Calling map function
const output = map(arr, fnn);

// Printing result
console.log(output); // [1, 3, 5]


