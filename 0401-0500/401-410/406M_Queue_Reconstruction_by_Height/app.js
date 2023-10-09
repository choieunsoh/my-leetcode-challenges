// 406. Queue Reconstruction by Height
// https://leetcode.com/problems/queue-reconstruction-by-height/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  const result = [];
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  for (let i = 0; i < people.length; i++) {
    result.splice(people[i][1], 0, people[i]);
  }
  return result;
};

var people = [
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
];
var expected = [
  [5, 0],
  [7, 0],
  [5, 2],
  [6, 1],
  [4, 4],
  [7, 1],
];
var result = reconstructQueue(people);
console.log(result, result.join() === expected.join());

var people = [
  [6, 0],
  [5, 0],
  [4, 0],
  [3, 2],
  [2, 2],
  [1, 4],
];
var expected = [
  [4, 0],
  [5, 0],
  [2, 2],
  [3, 2],
  [1, 4],
  [6, 0],
];
var result = reconstructQueue(people);
console.log(result, result.join() === expected.join());
