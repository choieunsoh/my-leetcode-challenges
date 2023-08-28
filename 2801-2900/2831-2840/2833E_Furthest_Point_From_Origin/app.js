// 2833. Furthest Point From Origin
// https://leetcode.com/problems/furthest-point-from-origin/
/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
  let l = 0;
  let r = 0;
  let lr = 0;
  for (const move of moves) {
    if (move === 'L') l++;
    else if (move === 'R') r++;
    else lr++;
  }
  if (l === r) return lr;
  if (l < r) return r + lr - l;
  return l + lr - r;
};

var moves = 'L_RL__R';
var expected = 3;
var result = furthestDistanceFromOrigin(moves);
console.log(result, result === expected);

var moves = '_R__LL_';
var expected = 5;
var result = furthestDistanceFromOrigin(moves);
console.log(result, result === expected);

var moves = '_______';
var expected = 7;
var result = furthestDistanceFromOrigin(moves);
console.log(result, result === expected);
