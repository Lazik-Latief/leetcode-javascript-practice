/*
=====================================================
LeetCode 2634 – Filter Elements from Array
=====================================================

WHAT THIS TASK DOES:
--------------------
We are given:
1. An array of numbers → arr
2. A function → fn

The function fn decides whether an element should be
kept or removed.

Our job:
- Create a NEW array
- Add only those elements for which fn returns TRUE
- DO NOT use Array.filter()

This is basically how filter() works internally.
*/


/**
 * @param {number[]} arr - input array
 * @param {Function} fn - filtering function
 * @return {number[]} - filtered array
 */
var filter = function (arr, fn) {

    // Step 1: Create an empty array
    // This will store elements that pass the test
    let filteredArr = [];

    // Step 2: Loop through the array manually
    for (let i = 0; i < arr.length; i++) {

        /*
        Step 3:
        Call fn with:
        - arr[i] → current value
        - i      → current index

        If fn returns a truthy value (true, non-zero, etc),
        then we keep this element.
        */
        if (fn(arr[i], i)) {

            // Step 4: Add the element to the result array
            filteredArr.push(arr[i]);
        }
    }

    // Step 5: Return the final filtered array
    return filteredArr;
};


/*
=====================================================
EXAMPLES (You can run these in VS Code)
=====================================================
*/

// Example 1: Keep numbers greater than 10
const result1 = filter([0, 10, 20, 30], function (value) {
    return value > 10;
});
console.log(result1); // [20, 30]


// Example 2: Keep only the first element (index = 0)
const result2 = filter([1, 2, 3], function (value, index) {
    return index === 0;
});
console.log(result2); // [1]


// Example 3: Remove falsy values (0 is falsy)
const result3 = filter([0, 1, 2, 0, 3], function (value) {
    return value;
});
console.log(result3); // [1, 2, 3]


/*
=====================================================
KEY TAKEAWAYS:
-----------------------------------------------------
✔ We manually loop instead of using .filter()
✔ fn decides TRUE or FALSE
✔ Truthy → keep the element
✔ Falsy  → skip the element
✔ This is how Array.filter() works internally
=====================================================
*/
