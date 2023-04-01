// 96. Unique Binary Search Trees
// https://leetcode.com/problems/unique-binary-search-trees/
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  return trees(1, n);

  function trees(lo, hi) {
    if (lo >= hi) return 1;
    let total = 0;
    for (let i = lo; i <= hi; i++) {
      total += trees(lo, i - 1) * trees(i + 1, hi);
    }
    return total;
  }
};

var n = 3;
var expected = 5;
var result = numTrees(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = numTrees(n);
console.log(result, result === expected);
