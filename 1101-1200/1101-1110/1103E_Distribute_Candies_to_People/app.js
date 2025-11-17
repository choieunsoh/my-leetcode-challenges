// 1103. Distribute Candies to People
// https://leetcode.com/problems/distribute-candies-to-people/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const result = new Array(num_people).fill(0);
  let index = 0;
  while (candies > 0) {
    const candyCount = Math.min(candies, index + 1);
    result[index % num_people] += candyCount;
    candies -= candyCount;
    index++;
  }

  return result;
};

var candies = 7,
  num_people = 4;
var expected = [1, 2, 3, 1];
var result = distributeCandies(candies, num_people);
console.log(result, result.join() === expected.join());

var candies = 10,
  num_people = 3;
var expected = [5, 2, 3];
var result = distributeCandies(candies, num_people);
console.log(result, result.join() === expected.join());
