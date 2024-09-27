// 1231. Divide Chocolate
// https://leetcode.com/problems/divide-chocolate/description/
// T.C.: O(n log (S/(k+1)))
// S.C.: O(1)
/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
  const peopleCount = k + 1;
  if (peopleCount === sweetness.length) {
    return Math.min(...sweetness);
  }

  let left = 1;
  let right = 10e10;
  let result = left;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canShareAll(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function canShareAll(minSweetness) {
    let people = 0;
    let sum = 0;
    for (const sweet of sweetness) {
      sum += sweet;
      if (sum >= minSweetness) {
        people++;
        sum = 0;
      }
    }
    return people >= peopleCount;
  }
};

var sweetness = [1, 2, 3, 4, 5, 6, 7, 8, 9],
  k = 5;
var expected = 6;
var result = maximizeSweetness(sweetness, k);
console.log(result, result === expected);

var sweetness = [5, 6, 7, 8, 9, 1, 2, 3, 4],
  k = 8;
var expected = 1;
var result = maximizeSweetness(sweetness, k);
console.log(result, result === expected);

var sweetness = [1, 2, 2, 1, 2, 2, 1, 2, 2],
  k = 2;
var expected = 5;
var result = maximizeSweetness(sweetness, k);
console.log(result, result === expected);
