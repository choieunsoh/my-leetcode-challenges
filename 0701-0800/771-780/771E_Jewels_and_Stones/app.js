// https://leetcode.com/problems/jewels-and-stones/
// 771. Jewels and Stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], 0);
  }
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++;
    }
  }
  return count;
};

var jewels = 'aA',
  stones = 'aAAbbbb',
  expected = 3;
console.log(numJewelsInStones(jewels, stones), expected);

var jewels = 'z',
  stones = 'ZZ',
  expected = 0;
console.log(numJewelsInStones(jewels, stones), expected);
