// 293. Flip Game
// https://leetcode.com/problems/flip-game/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
  const result = [];
  const chars = currentState.split('');
  for (let i = 0; i < currentState.length - 1; i++) {
    if (chars[i] === '+' && chars[i + 1] === '+') {
      chars[i] = '-';
      chars[i + 1] = '-';
      result.push(chars.join(''));
      chars[i] = '+';
      chars[i + 1] = '+';
    }
  }
  return result;
};

var currentState = '++++';
var expected = ['--++', '+--+', '++--'];
var result = generatePossibleNextMoves(currentState);
console.log(result, result.sort().join() === expected.sort().join());

var currentState = '+';
var expected = [];
var result = generatePossibleNextMoves(currentState);
console.log(result, result.sort().join() === expected.sort().join());
