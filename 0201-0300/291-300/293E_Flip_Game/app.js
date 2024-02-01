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
  for (let i = 0; i < currentState.length - 1; i++) {
    const first = currentState[i];
    const second = currentState[i + 1];
    if (first === '+' && second === '+') {
      result.push(currentState.slice(0, i) + '--' + currentState.slice(i + 2));
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
