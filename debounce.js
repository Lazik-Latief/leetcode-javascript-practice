/**
 * Debounce Function
 *
 * This function returns a debounced version of the given function `fn`.
 * The debounced function delays execution by `t` milliseconds.
 * If it is called again before `t` ms, the previous call is cancelled.
 */

var debounce = function (fn, t) {
  // This variable stores the timeout ID
  let timerId = null;

  // Return the debounced function
  return function (...args) {
    // If a timer already exists, cancel it
    if (timerId !== null) {
      clearTimeout(timerId);
    }

    // Set a new timer to execute the function after `t` ms
    timerId = setTimeout(() => {
      fn(...args); // Call the original function with latest arguments
    }, t);
  };
};
