// 1964. Find the Longest Valid Obstacle Course at Each Position
// https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/description/
/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
  const n = obstacles.length;
  const result = new Array(n).fill(0);
  const heights = new Array(n).fill(0);
  let length = 0;
  for (let i = 0; i < n; i++) {
    const height = obstacles[i];
    const idx = binarySearch(heights, height, length - 1);
    if (idx === length) length++;
    heights[idx] = height;
    result[i] = idx + 1;
  }
  return result;

  function binarySearch(heights, target, right) {
    if (right < 0) return 0;
    let left = 0;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (heights[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

var obstacles = [1, 2, 3, 2];
var expected = [1, 2, 3, 3];
var result = longestObstacleCourseAtEachPosition(obstacles);
console.log(result, result.join() === expected.join());

var obstacles = [2, 2, 1];
var expected = [1, 2, 1];
var result = longestObstacleCourseAtEachPosition(obstacles);
console.log(result, result.join() === expected.join());

var obstacles = [3, 1, 5, 6, 4, 2];
var expected = [1, 1, 2, 3, 2, 2];
var result = longestObstacleCourseAtEachPosition(obstacles);
console.log(result, result.join() === expected.join());
