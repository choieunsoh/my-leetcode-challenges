// 2211. Count Collisions on a Road
// https://leetcode.com/problems/count-collisions-on-a-road/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let count = 0;
  let flag = -1;
  for (let i = 0; i < directions.length; i++) {
    const car = directions[i];
    if (car === 'L') {
      if (flag >= 0) {
        count += flag + 1;
        flag = 0;
      }
    } else if (car === 'S') {
      if (flag > 0) {
        count += flag;
      }
      flag = 0;
    } else {
      if (flag >= 0) {
        flag++;
      } else {
        flag = 1;
      }
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
