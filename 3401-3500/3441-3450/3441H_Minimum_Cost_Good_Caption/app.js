// 3441. Minimum Cost Good Caption
// https://leetcode.com/problems/minimum-cost-good-caption/
// T.C.: O(n)
// S.C.: O(n)
const dp = Array.from({ length: 50001 }, () => Array.from({ length: 26 }, () => Array(3).fill(Infinity / 2)));
/**
 * @param {string} caption
 * @return {string}
 */
function minCostGoodCaption(caption) {
  const sz = caption.length;
  if (sz < 3) {
    return '';
  }
  caption = caption.split('').reverse().join('');

  // Initialize the first vector
  for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
    dp[0][c - 'a'.charCodeAt(0)][0] = Math.abs(caption.charCodeAt(0) - c);
    dp[0][c - 'a'.charCodeAt(0)][1] = Infinity / 2;
    dp[0][c - 'a'.charCodeAt(0)][2] = Infinity / 2;
  }

  let best_run = Infinity / 2;
  for (let i = 1; i < sz; i++) {
    let new_best = Infinity / 2;
    for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
      // Cost of switching to a new character depends on the minimal cost of completed runs
      dp[i][c - 'a'.charCodeAt(0)][0] = Math.abs(caption.charCodeAt(i) - c) + best_run;
      // Cost to advance from length 1 to length 2
      dp[i][c - 'a'.charCodeAt(0)][1] = Math.abs(caption.charCodeAt(i) - c) + dp[i - 1][c - 'a'.charCodeAt(0)][0];
      // Cost to advance from length 2 to length 3+ or length 3+ to length 3+
      dp[i][c - 'a'.charCodeAt(0)][2] = Math.min(
        Math.abs(caption.charCodeAt(i) - c) + dp[i - 1][c - 'a'.charCodeAt(0)][1],
        Math.abs(caption.charCodeAt(i) - c) + dp[i - 1][c - 'a'.charCodeAt(0)][2]
      );
      // Keep track of cheapest completed run
      new_best = Math.min(new_best, dp[i][c - 'a'.charCodeAt(0)][2]);
    }
    best_run = new_best;
  }

  let output = '';
  let best = Infinity;
  let target = -1;
  let index = sz - 1;
  for (let c = 25; c >= 0; c--) {
    if (best >= dp[index][c][2]) {
      target = c;
      best = dp[index][c][2];
    }
  }
  output += String.fromCharCode('a'.charCodeAt(0) + target).repeat(3);
  // Reduce best score
  best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
  best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
  best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);

  while (index >= 0) {
    // Find the best continuation using a new character
    let new_target = 26;
    for (let c = 25; c >= 0; c--) {
      if (best === dp[index][c][2]) {
        new_target = c;
      }
    }
    if (
      new_target < target ||
      (dp[index][target][0] > best && dp[index][target][1] > best && dp[index][target][2] > best)
    ) {
      target = new_target;
      output += String.fromCharCode('a'.charCodeAt(0) + target).repeat(3);
      // Reduce best score
      best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
      best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
      best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
    } else {
      output += String.fromCharCode('a'.charCodeAt(0) + target);
      best -= Math.abs(caption.charCodeAt(index--) - 'a'.charCodeAt(0) - target);
    }
  }
  return output;
}

var caption = 'cdcd';
var expected = 'cccc';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);

var caption = 'aca';
var expected = 'aaa';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);

var caption = 'bc';
var expected = '';
var result = minCostGoodCaption(caption);
console.log(result, result === expected);
