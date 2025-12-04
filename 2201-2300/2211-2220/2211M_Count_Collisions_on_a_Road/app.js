// 2211. Count Collisions on a Road
// https://leetcode.com/problems/count-collisions-on-a-road/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  const n = directions.length;
  let left = 0;
  let right = n - 1;

  while (left < n && directions[left] === 'L') {
    left++;
  }

  while (right >= left && directions[right] === 'R') {
    right--;
  }

  let count = 0;
  for (let i = left; i <= right; i++) {
    if (directions[i] !== 'S') {
      count++;
    }
  }
  return count;
};

var directions = 'RLRSLL';
var expected = 5;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'LLRR';
var expected = 0;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'SSSS';
var expected = 0;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'RSSS';
var expected = 1;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'RSLS';
var expected = 2;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'RRRR';
var expected = 0;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'LLLL';
var expected = 0;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'RRRLLL';
var expected = 6;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'LRRRLL';
var expected = 5;
var result = countCollisions(directions);
console.log(result, result === expected);

var directions = 'LRRRSLLL';
var expected = 6;
var result = countCollisions(directions);
console.log(result, result === expected);
