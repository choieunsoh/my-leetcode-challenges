var combine = (n, k) => {
  let result = [];
  let q = [];

  const combi = (n, k, start = 1) => {
    if (k === 0) {
      result.push([...q]);
    } else {
      for (let i = start; i <= n; i++) {
        q.push(i);
        combi(n, k - 1, i + 1);
        q.pop();
      }
    }
  };

  combi(n, k);
  return result;
};

var printCombine = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
};

var n = 4;
var k = 2;
console.log(printCombine(combine(n, k)));
