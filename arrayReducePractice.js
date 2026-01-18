/*
=====================================================
LeetCode Practice: Array Reduce Transformation
=====================================================

PROBLEM SUMMARY:
----------------
You are given:
1. An array of integers → nums
2. A reducer function → fn
3. An initial value → init

Goal:
-----
Apply fn step by step on the array elements,
carrying forward the result each time.

Process:
---------
val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])
...
Return final val

SPECIAL CASE:
-------------
If nums is empty → return init

IMPORTANT:
----------
❌ Do NOT use Array.reduce()
*/


/*
=====================================================
METHOD 1: ITERATIVE APPROACH (MOST COMMON & CLEAR)
=====================================================
*/

function reduceMethod1(nums, fn, init) {

    // Start with the initial value
    let val = init;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {

        // Update val using the reducer function
        val = fn(val, nums[i]);
    }

    // If nums is empty, loop never runs → init is returned
    return val;
}


/*
=====================================================
METHOD 2: RECURSIVE APPROACH (CONCEPTUAL LEARNING)
=====================================================
*/

function reduceMethod2(nums, fn, init, index = 0) {

    // Base case:
    // If we've processed all elements, return accumulated value
    if (index === nums.length) {
        return init;
    }

    // Apply fn to current value and current element
    const newValue = fn(init, nums[index]);

    // Recurse for next index
    return reduceMethod2(nums, fn, newValue, index + 1);
}


/*
=====================================================
EXAMPLES (RUN & UNDERSTAND)
=====================================================
*/

// Example reducer function (sum)
function sum(acc, curr) {
    return acc + curr;
}

// Example 1
console.log(
    reduceMethod1([1, 2, 3, 4], sum, 0)
); // Output: 10

// Example 2
console.log(
    reduceMethod2([1, 2, 3, 4], sum, 0)
); // Output: 10

// Empty array case
console.log(
    reduceMethod1([], sum, 100)
); // Output: 100


/*
=====================================================
KEY TAKEAWAYS:
-----------------------------------------------------
✔ reduce works by carrying an accumulated value
✔ init is the starting point
✔ Each iteration updates the accumulated value
✔ Iterative approach is best for interviews
✔ Recursive approach helps understand the flow
=====================================================
*/
