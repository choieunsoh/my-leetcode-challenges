// 2801. Count Stepping Numbers in Range
// https://leetcode.com/problems/count-stepping-numbers-in-range/

// Similar as
// 2719. Count of Integers
// https://leetcode.com/problems/count-of-integers/solutions/3596874/easy-explaination-digit-dp-solution-recursion-memoization/
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var countSteppingNumbers = function (low, high) {
  const mod = 1e9 + 7;
  const zero = '0'.charCodeAt(0);

  let dp = buildDP(low.length);
  const count1 = f(low, 0, true, -1, true);
  dp = buildDP(high.length);
  const count2 = f(high, 0, true, -1, true);

  let add = true;
  for (let i = 1; i < low.length; i++) {
    const prev = low.charCodeAt(i - 1) - zero;
    const curr = low.charCodeAt(i) - zero;
    if (Math.abs(prev - curr) != 1) {
      add = false;
      break;
    }
  }

  let count = (count2 - count1 + mod) % mod;
  if (add) {
    count = (count + 1) % mod;
  }
  return (count + mod) % mod;

  function buildDP(length) {
    const dp = new Array(length);
    for (let i = 0; i < length; i++) {
      dp[i] = new Array(2);
      dp[i][0] = Array.from({ length: 11 }, () => new Array(2));
      dp[i][1] = Array.from({ length: 11 }, () => new Array(2));
    }
    return dp;
  }

  function f(num, idx, bound, prev, isZero) {
    if (idx === num.length) return 1;

    const boundIdx = bound ? 0 : 1;
    const zeroIdx = isZero ? 0 : 1;
    if (dp[idx][boundIdx][prev + 1][zeroIdx] !== undefined) {
      return dp[idx][boundIdx][prev + 1][zeroIdx];
    }

    let ans = 0;
    let max = 9;
    if (bound) {
      max = num.charCodeAt(idx) - zero;
    }

    for (let i = 0; i <= max; i++) {
      if (prev === -1 || Math.abs(prev - i) === 1 || isZero) {
        ans = (ans + f(num, idx + 1, bound && i === max, i, isZero && i === 0)) % mod;
      }
    }

    return (dp[idx][boundIdx][prev + 1][zeroIdx] = ans);
  }
};

var low = '1',
  high = '11';
var expected = 10;
var result = countSteppingNumbers(low, high);
console.log(result, result === expected);

var low = '90',
  high = '101';
var expected = 2;
var result = countSteppingNumbers(low, high);
console.log(result, result === expected);
