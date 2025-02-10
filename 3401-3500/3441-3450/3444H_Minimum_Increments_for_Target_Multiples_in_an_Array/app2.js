// 3444. Minimum Increments for Target Multiples in an Array
// https://leetcode.com/problems/minimum-increments-for-target-multiples-in-an-array/description/
// T.C.: O(n*16*16)
// S.C.: O(16)
/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var minimumIncrements = function (nums, target) {
  const k = target.length;
  const map = new Map();

  for (let mask = 1; mask < 1 << k; mask++) {
    const subset = [];
    for (let i = 0; i < k; i++) {
      if (mask & (1 << i)) {
        subset.push(target[i]);
      }
    }

    let currLcm = subset[0];
    for (let j = 1; j < subset.length; j++) {
      currLcm = lcm(currLcm, subset[j]);
    }
    map.set(mask, currLcm);
  }

  const fullMask = (1 << k) - 1;
  const dp = new Array(1 << k).fill(Infinity);
  dp[0] = 0;

  for (const num of nums) {
    const maskCost = [];
    for (const [mask, lcmVal] of map) {
      const remain = num % lcmVal;
      const cost = remain === 0 ? 0 : lcmVal - remain;
      maskCost.push([mask, cost]);
    }

    const newDp = [...dp];
    for (let prevMask = 0; prevMask < 1 << k; prevMask++) {
      if (dp[prevMask] === Infinity) continue;
      for (const [mask, cost] of maskCost) {
        const newMask = prevMask | mask;
        const newCost = dp[prevMask] + cost;
        if (newCost < newDp[newMask]) {
          newDp[newMask] = newCost;
        }
      }
    }

    dp.splice(0, dp.length, ...newDp);
  }

  return dp[fullMask] === Infinity ? -1 : dp[fullMask];

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
};

var nums = [1, 2, 3],
  target = [4];
var expected = 1;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);

var nums = [8, 4],
  target = [10, 5];
var expected = 2;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);

var nums = [7, 9, 10],
  target = [7];
var expected = 0;
var result = minimumIncrements(nums, target);
console.log(result, result === expected);
