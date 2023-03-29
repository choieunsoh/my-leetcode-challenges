// fillingBlocks
/**
 * @param {number} x
 * @return {number}
 */
function solution(x) {
  let h = [0, 1];
  let o = [0, 1];
  let n = [1, 1];
  for (let i = 2; i <= x; i++) {
    h[i] = n[i - 1] + h[i - 1];
    o[i] = n[i - 1] + o[i - 2];
    n[i] = n[i - 1] + n[i - 2] + 2 * h[i - 1] + o[i - 1];
  }
  console.log(h);
  console.log(o);
  console.log(n);
  return n[x];
}

var n = 1;
var expected = 1;
var result = solution(n);
console.log(result, result == expected);

var n = 4;
var expected = 36;
var result = solution(n);
console.log(result, result == expected);
