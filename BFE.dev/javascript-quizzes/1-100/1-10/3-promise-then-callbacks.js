Promise.resolve(1)
  .then(() => 2)
  .then(3)
  .then((value) => value * 3)
  .then(Promise.resolve(4))
  .then(console.log);

/*
6
*/

/*
Promise.resolve(1) // 1
  .then(() => 2) // 2 (as 1 isn't used)
  .then(3) // skip
  .then((value) => value * 3) // 2 * 3 == 6
  .then(Promise.resolve(4)) // creates a Pending promise
  .then(console.log) // funnels 6 into console.log
*/
