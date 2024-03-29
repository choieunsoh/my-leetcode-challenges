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

  let twoPostsBack = k;
  let onePostBack = k * k;

  for (let i = 3; i <= n; i++) {
    const curr = (k - 1) * (onePostBack + twoPostsBack);
    [twoPostsBack, onePostBack] = [onePostBack, curr];
  }

  return onePostBack;
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
