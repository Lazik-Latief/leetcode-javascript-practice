// Function that takes two promises and returns a new promise
// The new promise resolves with the sum of the resolved values
var addTwoPromises = async function (promise1, promise2) {

  // Promise.all runs both promises in parallel
  // It waits until BOTH promises are resolved
  const results = await Promise.all([promise1, promise2]);

  // Destructuring the resolved values from the array
  const a = results[0];
  const b = results[1];

  // Return the sum
  // Since this is an async function, returning a value
  // automatically resolves a promise with that value
  return a + b;
};


// -------------------
// Example usage (for VS Code testing)
// -------------------

const promise1 = new Promise(resolve => {
  setTimeout(() => resolve(2), 20);
});

const promise2 = new Promise(resolve => {
  setTimeout(() => resolve(5), 60);
});

// Calling the function
addTwoPromises(promise1, promise2)
  .then(result => {
    console.log("Sum is:", result); // Output: 7
  });
