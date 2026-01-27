// cancellable function
function cancellable(fn, args, t) {
  const timeoutId = setTimeout(() => {
    const result = fn(...args);
    console.log(`Function executed, returned: ${result}`);
  }, t);

  // cancel function
  return function cancelFn() {
    clearTimeout(timeoutId);
    console.log("Execution cancelled");
  };
}

/* ---------------- TEST CASE ---------------- */

const fn = (x) => x * 5;
const args = [2];
const t = 20; // function should run after 20ms

const cancelTimeMs = 50; // cancel after 50ms (too late)

const cancelFn = cancellable(fn, args, t);

// Try cancelling
setTimeout(cancelFn, cancelTimeMs);
