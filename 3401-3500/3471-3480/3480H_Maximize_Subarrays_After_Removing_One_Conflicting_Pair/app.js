// 3480. Maximize Subarrays After Removing One Conflicting Pair
// https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @return {number}
 */
var maxSubarrays = function (n, conflictingPairs) {
  const bMin1 = new Array(n + 1).fill(n + 1);
  const bMin2 = new Array(n + 1).fill(n + 1);
  for (const pair of conflictingPairs) {
    const a = Math.min(pair[0], pair[1]);
    const b = Math.max(pair[0], pair[1]);
    if (bMin1[a] > b) {
      bMin2[a] = bMin1[a];
      bMin1[a] = b;
    } else if (bMin2[a] > b) {
      bMin2[a] = b;
    }
  }

  let result = 0;
  let b1 = n + 1;
  let b2 = n + 1;
  const delCount = new Array(n + 2).fill(0);
  for (let i = n; i >= 1; i--) {
    if (b1 > bMin1[i]) {
      b2 = Math.min(b1, bMin2[i]);
      b1 = bMin1[i];
    } else {
      b2 = Math.min(b2, bMin1[i]);
    }
    result += b1 - i;
    delCount[b1] += b2 - b1;
  }
  return result + Math.max(...delCount);
};

var n = 4,
  conflictingPairs = [
    [2, 3],
    [1, 4],
  ];
var expected = 9;
var result = maxSubarrays(n, conflictingPairs);
console.log(result, result === expected);

var n = 5,
  conflictingPairs = [
    [1, 2],
    [2, 5],
    [3, 5],
  ];
var expected = 12;
var result = maxSubarrays(n, conflictingPairs);
console.log(result, result === expected);
