/**
 * LeetCode 2637 - Promise Time Limit
 * Creates a time-limited version of an async function
 */

var timeLimit = function (fn, t) {
  // Return a new async function
  return async function (...args) {
    return new Promise((resolve, reject) => {
      // Timer that rejects after t milliseconds
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Execute the original async function
      fn(...args)
        .then((result) => {
          // Clear timer if function finishes in time
          clearTimeout(timer);
          resolve(result);
        })
        .catch((error) => {
          // Clear timer if function throws an error
          clearTimeout(timer);
          reject(error);
        });
    });
  };
};
