// 825. Friends Of Appropriate Ages
// https://leetcode.com/problems/friends-of-appropriate-ages/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function (ages) {
  const counter = new Array(121).fill(0);
  const prefixSum = new Array(121).fill(0);
  for (const age of ages) {
    counter[age]++;
  }

  prefixSum[0] = counter[0];
  for (let age = 1; age < counter.length; age++) {
    prefixSum[age] = prefixSum[age - 1] + counter[age];
  }

  let result = 0;
  for (let age = 15; age < counter.length; age++) {
    if (counter[age] === 0) continue;
    const minAge = Math.floor(age * 0.5 + 7);
    const count = prefixSum[age] - prefixSum[minAge];
    result += (count - 1) * counter[age];
  }

  return result;
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
