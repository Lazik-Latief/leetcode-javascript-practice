// ===============================
// Example 1: Basic Closure
// ===============================

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

