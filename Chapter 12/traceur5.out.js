function timeout(ms) {
  return new Promise((function(resolve) {
    setTimeout(resolve, ms);
  }));
}
function asyncValue(value) {
  return $traceurRuntime.asyncWrap(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          Promise.resolve(timeout(1500)).then($ctx.createCallback(3), $ctx.errback);
          return;
        case 3:
          $ctx.returnValue = value;
          $ctx.state = 5;
          break;
        case 5:
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, this);
}
(function() {
  var valuePromise,
      value;
  return $traceurRuntime.asyncWrap(function($ctx) {
    while (true)
      switch ($ctx.state) {
        case 0:
          console.log("Starting.");
          valuePromise = asyncValue(42).catch(console.error.bind(console));
          console.log("Task is running in the background.");
          console.log("Awaiting the promise.");
          $ctx.state = 5;
          break;
        case 5:
          Promise.resolve(valuePromise).then($ctx.createCallback(2), $ctx.errback);
          return;
        case 2:
          value = $ctx.value;
          $ctx.state = 3;
          break;
        case 3:
          console.log("Promise resolved.");
          assert.equal(42, value);
          console.log(value);
          done();
          $ctx.state = -2;
          break;
        default:
          return $ctx.end();
      }
  }, this);
})();
