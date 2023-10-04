// 933. Number of Recent Calls
// https://leetcode.com/problems/number-of-recent-calls
// T.C.: O(n)
// S.C.: O(n)
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const start = t - 3000;
  this.queue.push(t);
  while (this.queue[0] < start) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
var obj = null;
var ops = ['RecentCounter', 'ping', 'ping', 'ping', 'ping'];
var inputs = [[], [1], [100], [3001], [3002]];
var outputs = [null, 1, 2, 3, 3];
for (let i = 0; i < ops.length; i++) {
  const op = ops[i];
  const input = inputs[i][0];
  const expected = outputs[i];
  let result = null;
  switch (op) {
    case 'ping':
      result = obj.ping(input);
      break;
    default:
      obj = new RecentCounter();
      break;
  }
  console.log(i, op, input, result, result === expected);
}
