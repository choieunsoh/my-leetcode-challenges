// 773. Sliding Puzzle
// https://leetcode.com/problems/sliding-puzzle/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  const moves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  const startState = board.flat().join('');
  const seen = new Set([startState]);
  let queue = [[startState, startState.indexOf('0'), 0]];
  while (queue.length) {
    const nextQueue = [];
    for (const [currState, currPos, currSteps] of queue) {
      if (currState === '123450') return currSteps;
      for (const nextPos of moves[currPos]) {
        const nextState = swap(currState, currPos, nextPos);
        if (!seen.has(nextState)) {
          seen.add(nextState);
          nextQueue.push([nextState, nextPos, currSteps + 1]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;

  function swap(state, curr, next) {
    const states = state.split('');
    [states[curr], states[next]] = [states[next], states[curr]];
    return states.join('');
  }
};

var board = [
  [1, 2, 3],
  [4, 0, 5],
];
var expected = 1;
var result = slidingPuzzle(board);
console.log(result, result === expected);

var board = [
  [1, 2, 3],
  [5, 4, 0],
];
var expected = -1;
var result = slidingPuzzle(board);
console.log(result, result === expected);

var board = [
  [4, 1, 2],
  [5, 0, 3],
];
var expected = 5;
var result = slidingPuzzle(board);
console.log(result, result === expected);
