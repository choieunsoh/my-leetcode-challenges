// JavaScript Event Loop, Micro Task, and Macro Task

console.log('Start, main');

const p = new Promise((resolve, reject) => {
  console.log('Promise > p, main');
  setTimeout(() => {
    console.log('Promise > setTimeout, macrotask');
    resolve(9876);
  });
});
p.then((data) => console.log('p, macrotask > microtask,', data));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    console.log('fetch API, macrotask,', data[0].name);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

queueMicrotask(() => console.log('queueMicrotask, microtask'));

Promise.resolve(1234).then((data) => {
  console.log('Promise, microtask,', data);
});

setTimeout(() => {
  console.log('setTimeout, macrotask');
  p.then((data) => console.log('setTimeout > p, macrotask > microtask,', data * 2));
});

const q = new Promise((resolve, reject) => {
  console.log('Promise > q, main');
  p.then((data) => resolve(data + 1235));
});
q.then((data) => console.log('q, macrotask > microtask,', data));

queueMicrotask(() => console.log('queueMicrotask No.2, microtask'));

const r = new Promise((resolve, reject) => {
  console.log('Promise > r, main');
  resolve(7777);
});
r.then((data) => console.log('r, microtask,', data));

console.log('End, main');
