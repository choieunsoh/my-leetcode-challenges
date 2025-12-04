// 2211. Count Collisions on a Road
// https://leetcode.com/problems/count-collisions-on-a-road/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let count = 0;
  const stack = [];
  for (const car of directions) {
    if (car === 'R') {
      stack.push(car);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === 'R') {
        stack.pop();
        count += car === 'L' ? 2 : 1;
        stack.push('S');
        stack.push('S');
      } else if (stack.length > 0 && stack[stack.length - 1] === 'S') {
        count += car === 'L' ? 1 : 0;
        stack.push('S');
      } else {
        stack.push(car);
      }
    }
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === 'R' && i + 1 < stack.length && stack[i + 1] === 'S') {
      count++;
      stack[i] = 'S';
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
