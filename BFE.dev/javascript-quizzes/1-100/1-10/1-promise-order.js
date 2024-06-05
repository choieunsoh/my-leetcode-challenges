console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);

/*
1 // main thread
2 // main thread
3 // main thread
4 // main thread
7 // sync code
5 // job queue
6 // job queue
9 // callback queue 0s
8 // callback queue 10s
*/
