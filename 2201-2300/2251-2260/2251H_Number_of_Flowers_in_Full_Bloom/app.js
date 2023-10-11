// 2251. Number of Flowers in Full Bloom
// https://leetcode.com/problems/number-of-flowers-in-full-bloom/
// T.C.: O((n+m) log n)
// S.C.: O(n)
/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function (flowers, people) {
  const flowersStart = flowers.map(([start]) => start).sort((a, b) => a - b);
  const flowersEnd = flowers.map(([, end]) => end + 1).sort((a, b) => a - b);
  const boomFlowers = [0];
  const arriveTimes = [0];
  let startIndex = 0;
  let endIndex = 0;
  while (startIndex < flowers.length && endIndex < flowers.length) {
    if (flowersStart[startIndex] < flowersEnd[endIndex]) {
      boomFlowers.push(boomFlowers.at(-1) + 1);
      arriveTimes.push(flowersStart[startIndex++]);
    } else {
      boomFlowers.push(boomFlowers.at(-1) - 1);
      arriveTimes.push(flowersEnd[endIndex++]);
    }
  }
  while (startIndex < flowers.length) {
    arriveTimes.push(flowersStart[startIndex++]);
    boomFlowers.push(boomFlowers.at(-1) + 1);
  }
  while (endIndex < flowers.length) {
    arriveTimes.push(flowersEnd[endIndex++]);
    boomFlowers.push(boomFlowers.at(-1) - 1);
  }
  console.log(boomFlowers.join(' '));
  console.log(arriveTimes.join(' '));

  const result = new Array(people.length);
  for (let i = 0; i < people.length; i++) {
    const arriveTime = people[i];
    const timeIndex = binarySearch(arriveTimes, arriveTime);
    result[i] = boomFlowers[timeIndex];
  }

  return result;

  function binarySearch(nums, target) {
    let result = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] > target) {
        result = mid - 1;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }
};

var flowers = [
    [1, 6],
    [3, 7],
    [9, 12],
    [4, 13],
  ],
  people = [2, 3, 7, 11];
var expected = [1, 2, 2, 2];
var result = fullBloomFlowers(flowers, people);
console.log(result, result.join() === expected.join());

var flowers = [
    [1, 10],
    [3, 3],
  ],
  people = [3, 3, 2];
var expected = [2, 2, 1];
var result = fullBloomFlowers(flowers, people);
console.log(result, result.join() === expected.join());

var flowers = [
    [36, 39],
    [29, 49],
    [32, 35],
    [14, 43],
    [42, 49],
    [48, 48],
    [32, 46],
    [6, 41],
    [14, 19],
  ],
  people = [14, 4];
var expected = [3, 0];
var result = fullBloomFlowers(flowers, people);
console.log(result, result.join() === expected.join());
