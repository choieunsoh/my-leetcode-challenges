// 683. K Empty Slots
// https://leetcode.com/problems/k-empty-slots/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} bulbs
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (bulbs, k) {
  const n = bulbs.length;
  const days = new Array(n);
  for (let i = 0; i < n; i++) {
    days[bulbs[i] - 1] = i + 1;
  }

  let result = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let right = k + 1;
  while (right < days.length) {
    let valid = true;
    for (let i = left + 1; i < right; i++) {
      if (days[i] < days[left] || days[i] < days[right]) {
        left = i;
        right = i + k + 1;
        valid = false;
        break;
      }
    }
    if (valid) {
      result = Math.min(result, Math.max(days[left], days[right]));
      left = right;
      right = left + k + 1;
    }
  }

  return result === Number.MAX_SAFE_INTEGER ? -1 : result;
};

var bulbs = [1, 3, 2],
  k = 1;
var expected = 2;
var result = kEmptySlots(bulbs, k);
console.log(result, result === expected);

var bulbs = [1, 2, 3],
  k = 1;
var expected = -1;
var result = kEmptySlots(bulbs, k);
console.log(result, result === expected);
