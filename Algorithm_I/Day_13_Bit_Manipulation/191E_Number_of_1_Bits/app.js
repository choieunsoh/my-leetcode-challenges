var hammingWeight = function (n) {
  let m = parseInt(n, 2);
  let x = m >> 1;
  console.log(x);
  let count = 0;
  while (m) {
    m = m & (m - 1);
    count++;
  }
  return count;
};
var n = "00000000000000000000000000001011";
console.log(hammingWeight(n));
