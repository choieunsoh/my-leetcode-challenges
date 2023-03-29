// fillingBlocks
/**
 * @param {number} n
 * @return {number}
 */
function solution(n) {
  const f = (n) => (n < 2 ? 1 : n < 3 ? 5 : n < 4 ? 11 : f(n - 1) + 5 * f(n - 2) + f(n - 3) - f(n - 4));
  return f(n);
}

var n = 1;
var expected = 1;
var result = solution(n);
console.log(result, result == expected);

var n = 4;
var expected = 36;
var result = solution(n);
console.log(result, result == expected);
