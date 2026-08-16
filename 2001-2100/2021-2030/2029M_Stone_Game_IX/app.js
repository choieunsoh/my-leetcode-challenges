// 2029. Stone Game IX
// https://leetcode.com/problems/stone-game-ix/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
  let cnt0 = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  for (const val of stones) {
    const type = val % 3;
    if (type === 0) {
      cnt0++;
    } else if (type === 1) {
      cnt1++;
    } else {
      cnt2++;
    }
  }
  if (cnt0 % 2 === 0) {
    return cnt1 >= 1 && cnt2 >= 1;
  }
  return cnt1 - cnt2 > 2 || cnt2 - cnt1 > 2;
};

var stones = [2, 1];
var expected = true;
var result = stoneGameIX(stones);
console.log(result, result === expected);

var stones = [2];
var expected = false;
var result = stoneGameIX(stones);
console.log(result, result === expected);

var stones = [5, 1, 2, 4, 3];
var expected = false;
var result = stoneGameIX(stones);
console.log(result, result === expected);
