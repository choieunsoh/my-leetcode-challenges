// 2305. Fair Distribution of Cookies
// https://leetcode.com/problems/fair-distribution-of-cookies/
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function (cookies, k) {
  cookies.sort((a, b) => a - b);

  const distribution = new Array(k).fill(0);
  let result = Number.MAX_SAFE_INTEGER;
  backtrack(distribution, 0);
  return result;

  // Generate all possible permutations of values 0 -> k-1, length === cookies.length
  function backtrack(distribution, currBag) {
    if (currBag === cookies.length) {
      result = Math.min(result, Math.max(...distribution));
      return;
    }

    for (let child = 0; child < k; child++) {
      if (distribution[child] + cookies[currBag] >= result) continue;
      if (child > 0 && distribution[child] === distribution[child - 1]) continue;

      distribution[child] += cookies[currBag];
      backtrack(distribution, currBag + 1);
      distribution[child] -= cookies[currBag];
    }
  }
};

var cookies = [8, 15, 10, 20, 8],
  k = 2;
var expected = 31;
var result = distributeCookies(cookies, k);
console.log(result, result === expected);

var cookies = [6, 1, 3, 2, 2, 4, 1, 2],
  k = 3;
var expected = 7;
var result = distributeCookies(cookies, k);
console.log(result, result === expected);
