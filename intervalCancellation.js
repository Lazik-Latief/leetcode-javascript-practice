/**
 * 2725. Interval Cancellation
 * 
 * Calls fn immediately and then every `t` milliseconds
 * until the returned cancel function is called.
 *
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  // Call immediately (0ms)
  fn(...args);

  // Start interval
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Return cancel function
  return function cancelFn() {
    clearInterval(intervalId);
  };
};

/* ------------------ TEST (optional) ------------------ */

const fn = (x) => {
  console.log(x * 2);
  return x * 2;
};

const args = [4];
const t = 35;

const cancelFn = cancellable(fn, args, t);

// Cancel after 1000ms / 1 second
setTimeout(cancelFn, 1000);
