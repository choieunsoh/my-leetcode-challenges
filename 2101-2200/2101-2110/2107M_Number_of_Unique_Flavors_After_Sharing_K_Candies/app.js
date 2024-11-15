// 2107. Number of Unique Flavors After Sharing K Candies
// https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var shareCandies = function (candies, k) {
  if (k === 0) return new Set(candies).size;
  const map = new Map();
  for (const candy of candies) {
    map.set(candy, (map.get(candy) ?? 0) + 1);
  }

  let right = 0;
  while (right < k) {
    const candy = candies[right++];
    const count = map.get(candy) - 1;
    map.set(candy, count);
    if (count === 0) {
      map.delete(candy);
    }
  }

  let count = map.size;
  while (right < candies.length) {
    const left = right - k;

    const rightCandy = candies[right++];
    const rightCandyCount = map.get(rightCandy) - 1;
    map.set(rightCandy, rightCandyCount);
    if (rightCandyCount === 0) {
      map.delete(rightCandy);
    }

    const leftCandy = candies[left];
    map.set(leftCandy, (map.get(leftCandy) ?? 0) + 1);

    count = Math.max(count, map.size);
  }
  return count;
};

var candies = [1, 2, 2, 3, 4, 3],
  k = 3;
var expected = 3;
var result = shareCandies(candies, k);
console.log(result, result === expected);

var candies = [2, 2, 2, 2, 3, 3],
  k = 2;
var expected = 2;
var result = shareCandies(candies, k);
console.log(result, result === expected);

var candies = [2, 4, 5],
  k = 0;
var expected = 3;
var result = shareCandies(candies, k);
console.log(result, result === expected);
