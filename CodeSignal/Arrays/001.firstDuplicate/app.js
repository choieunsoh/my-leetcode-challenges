// firstDuplicate;
// LC-287: https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} a
 * @return {number}
 */
function firstDuplicate(a) {
  const seen = new Set();
  for (const num of a) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}

var a = [2, 1, 3, 5, 3, 2],
  expected = 3;
var result = firstDuplicate(a);
console.log(result, result === expected);

var a = [2, 2],
  expected = 2;
var result = firstDuplicate(a);
console.log(result, result === expected);

var a = [2, 4, 3, 5, 1],
  expected = -1;
var result = firstDuplicate(a);
console.log(result, result === expected);
