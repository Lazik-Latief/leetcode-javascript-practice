function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

async function test() {
  const start = Date.now();
  await sleep(500);
  console.log("Done after", Date.now() - start, "ms");
}

test();
