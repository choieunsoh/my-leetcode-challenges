// 276. Paint Fence
// https://leetcode.com/problems/paint-fence/
// T.C.: O(N)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  if (n === 1) return k;

  let twoPosts = k;
  let onePost = k * k;

  for (let i = 3; i <= n; i++) {
    const curr = (k - 1) * (onePost + twoPosts);
    [twoPosts, onePost] = [onePost, curr];
  }

  return onePost;
};

var n = 3,
  k = 2;
var expected = 6;
var result = numWays(n, k);
console.log(result, result === expected);

var n = 1,
  k = 1;
var expected = 1;
var result = numWays(n, k);
console.log(result, result === expected);

var n = 7,
  k = 2;
var expected = 42;
var result = numWays(n, k);
console.log(result, result === expected);
