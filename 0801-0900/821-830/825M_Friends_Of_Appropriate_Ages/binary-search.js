// 825. Friends Of Appropriate Ages
// https://leetcode.com/problems/friends-of-appropriate-ages/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  let result = 0;
  const n = ages.length;
  ages.sort((a, b) => a - b);
  for (const age of ages) {
    const minAge = Math.floor(0.5 * age) + 7;
    const maxAge = age;
    if (minAge >= maxAge) continue;
    const left = upperBound(minAge);
    if (left >= n) continue;
    const right = upperBound(maxAge);
    result += Math.max(0, right - left - 1);
  }
  return result;

  function upperBound(target) {
    let index = 0;
    let left = 0;
    let right = ages.length;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (ages[mid] <= target) {
        index = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }
};

var ages = [16, 16];
var expected = 2;
var result = numFriendRequests(ages);
console.log(result, result === expected);

var ages = [16, 17, 18];
var expected = 2;
var result = numFriendRequests(ages);
console.log(result, result === expected);

var ages = [20, 30, 100, 110, 120];
var expected = 3;
var result = numFriendRequests(ages);
console.log(result, result === expected);
