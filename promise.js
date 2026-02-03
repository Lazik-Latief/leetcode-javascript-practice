var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    const total = functions.length;

    // Edge case: empty array
    if (total === 0) {
      resolve([]);
      return;
    }

    functions.forEach((fn, index) => {
      fn()
        .then((value) => {
          // Store result at correct index
          results[index] = value;
          completed++;

          // If all promises are resolved
          if (completed === total) {
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject immediately on first failure
          reject(error);
        });
    });
  });
};
