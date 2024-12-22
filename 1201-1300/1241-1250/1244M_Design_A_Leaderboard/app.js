// 1244. Design A Leaderboard
// https://leetcode.com/problems/design-a-leaderboard/description/
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
// T.C.: O(n log k)
// S.C.: O(n)

var Leaderboard = function () {
  this.scores = new Map();
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  this.scores.set(playerId, (this.scores.get(playerId) ?? 0) + score);
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  const pq = new MinPriorityQueue();
  for (const [, score] of this.scores) {
    pq.enqueue(score);
    if (pq.size() > K) {
      pq.dequeue();
    }
  }

  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += pq.dequeue().element;
  }
  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.scores.delete(playerId);
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

function run(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'Leaderboard') {
      obj = new Leaderboard();
    } else {
      const result = obj[ops[i]](...args) ?? null;
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = [
    'Leaderboard',
    'addScore',
    'addScore',
    'addScore',
    'addScore',
    'addScore',
    'top',
    'reset',
    'reset',
    'addScore',
    'top',
  ],
  inputs = [[], [1, 73], [2, 56], [3, 39], [4, 51], [5, 4], [1], [1], [2], [2, 51], [3]],
  outputs = [null, null, null, null, null, null, 73, null, null, null, 141];
run(ops, inputs, outputs);
