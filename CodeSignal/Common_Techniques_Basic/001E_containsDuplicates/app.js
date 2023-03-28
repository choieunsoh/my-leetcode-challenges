// containsDuplicates
// LC-217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number} a
 * @return {boolean}
 */
function containsDuplicates(a) {
  const seen = new Set();
  for (const num of a) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}

var a = [1, 2, 3, 1];
var expected = true;
var result = containsDuplicates(a);
console.log(result, result === expected);

var a = [3, 1];
var expected = false;
var result = containsDuplicates(a);
console.log(result, result === expected);
