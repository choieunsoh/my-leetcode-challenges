// 3577. Count the Number of Computer Unlocking Permutations
// https://leetcode.com/problems/count-the-number-of-computer-unlocking-permutations/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function (complexity) {
  const n = complexity.length;
  for (let i = 1; i < n; i++) {
    if (complexity[i] <= complexity[0]) {
      return 0;
    }
  }

  let count = 1;
  const MOD = 1e9 + 7;
  for (let i = 2; i < n; i++) {
    count = (count * i) % MOD;
  }
  return count;
};

var complexity = [1, 2, 3];
var expected = 2;
var result = countPermutations(complexity);
console.log(result, result === expected);

var complexity = [3, 3, 3, 4, 4, 4];
var expected = 0;
var result = countPermutations(complexity);
console.log(result, result === expected);
