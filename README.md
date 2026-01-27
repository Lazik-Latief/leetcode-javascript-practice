# LeetCode JavaScript Practice 

This repository contains my daily JavaScript practice from LeetCode.
The goal is to strengthen core programming concepts, problem-solving skills,
and build a strong foundation for frontend and software development roles.
Each problem is practiced with clarity, comments, and learning-focused solutions.

---

##  Practice Log

###  Topic: Closures (JavaScript)

In this section, I practiced problems related to JavaScript closures.
I learned how inner functions can remember variables from their outer scope
even after the outer function has finished execution.

###  Key Concepts Learned
- What a closure is and how it works
- Lexical scope in JavaScript
- Returning functions from functions
- Maintaining state using closures (counter problems)

###  Problems Practiced
- Create a function that always returns `"Hello World"`
- Create a counter function that increments on every call
- Understanding scope errors like calling inner functions directly
- Fixing common closure mistakes (unused expressions vs assignment)

---

## ## LeetCode Practice – createCounter

- Practiced the `createCounter` problem using JavaScript closures.  
- Implemented `increment`, `decrement`, and `reset` methods.  
- Learned how closures preserve state across function calls.  
- Tested the solution locally in VS Code.

##  LeetCode – Apply Transform Over Each Element in Array

- Practiced implementing `map` without using the built-in `Array.map`.  
- Used a loop to apply a function to each element and index.  
- Focused on understanding callbacks and array traversal.  
- Tested the solution locally in VS Code.

## Day 16 of Let’s Code focuses on JavaScript fundamentals.( LeetCode )

- This task implements array filtering without using Array.filter().
- Learned how callback functions work with values and indexes.
- Improved understanding of truthy and falsy values.
- Practiced clean logic and loop-based problem solving.

## Day 18 (as of January). ( LeetCode )

- Practiced implementing Array.reduce functionality from scratch.
- Learned how reducer functions accumulate values step by step.
- Solved the problem without using the built-in Array.reduce method.
- Implemented both iterative and recursive approaches for better     understanding.
- Strengthened core JavaScript logic and problem-solving skills.

## Day 19 (as of January). ( LeetCode )

- Solved the Function Composition problem using JavaScript.
- Learned how to compose multiple functions from right to left.
- Handled edge cases like an empty function array using identity functions.
- Practiced higher-order functions and closures.
- Improved understanding of functional programming concepts.

## Day 20 (as of January). ( LeetCode )

## LeetCode – Return Length of Arguments Passed

- Solved LeetCode problem 2703 using JavaScript.
- Demonstrates use of rest parameters (...args).
- Handles variable number of function arguments.
- Includes local test cases for VS Code practice.
- Focuses on core JavaScript fundamentals

## Day 21 (as of January). ( LeetCode )

- Solved the “Allow One Function Call” problem using JavaScript closures.
- Returned a wrapper function that controls how many times the original function runs.
- Used a closure variable to track whether the function was already called.
- Ensured the original function executes only on the first invocation.
- Returned undefined on all subsequent calls.
- Used the spread operator to support any number of arguments.
- Demonstrated how functions can retain state across executions.
- This task strengthened understanding of closures and higher-order functions.

## Day 23 (as of January). ( LeetCode )

Solved the Memoize problem using JavaScript closures.
Implemented a higher-order function that caches computed results.
Used an object as a cache to store function outputs by arguments.
Ensured repeated calls with the same inputs return cached values.
Handled different input functions including sum, fib, and factorial.
Preserved argument order to avoid incorrect cache reuse.
Improved performance by avoiding unnecessary recomputation.
Strengthened understanding of closures and memoization techniques.
---

## README Update
## ## Day 26 (as of January). ( LeetCode )

This task practices working with multiple JavaScript Promises.
Two promises are passed into a function and executed in parallel.
Promise.all() is used to wait until both promises resolve.
The resolved values are extracted from the returned array.
An async function with await is used for cleaner syntax.
The function returns the sum of both resolved numbers.
This mimics real-world async operations like API calls.
The solution follows a clean and efficient promise-handling pattern.
---

## Day 27 (as of January). ( LeetCode )

## LeetCode – Timeout Cancellation (2715)

Implemented a cancellable timeout function using JavaScript.
The function delays execution using setTimeout.
A cancel function is returned to stop execution if called early.
clearTimeout is used to cancel the scheduled task.
Demonstrates closures and async control in JavaScript.
---

## Language Used: JavaScript  
## Focus: Learning concepts, not optimization  
## Platform: LeetCode
