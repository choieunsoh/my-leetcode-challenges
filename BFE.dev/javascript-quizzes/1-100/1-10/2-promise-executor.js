new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject('error');
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log('error');
  }
);

/*
1 // When a promise gets settled (resolved or rejected) additional calls to resolve() or reject() will not have any effect.
*/
