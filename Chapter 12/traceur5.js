function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncValue(value) {
  await timeout(1500);
  return value;
}

(async function() {
  console.log("Starting.");
  var valuePromise =  asyncValue(42).catch(console.error.bind(console));
  console.log("Task is running in the background.");
  console.log("Awaiting the promise.");
  var value = await valuePromise;
  console.log("Promise resolved.");
  assert.equal(42, value);
  console.log(value);
  done();
})();