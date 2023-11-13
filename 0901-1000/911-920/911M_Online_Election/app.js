// 911. Online Election
// https://leetcode.com/problems/online-election/
// T.C.: O(n + n log n)
// S.C.: O(n)
/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function (persons, times) {
  const n = persons.length;
  const counter = new Array(n).fill(0);
  this.times = [];
  let topVote = 0;
  let leader = -1;
  for (var i = 0; i < n; i++) {
    const person = persons[i];
    const time = times[i];
    counter[person]++;
    if (counter[person] < topVote) continue;

    topVote = counter[person];
    if (person === leader) continue;

    leader = person;
    this.times.push([time, leader]);
  }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
  let index = this.times.length;
  let left = 0;
  let right = this.times.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const [time, person] = this.times[mid];
    if (time === t) return person;
    if (time > t) {
      index = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return this.times[index - 1][1];
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */

var ops = ['TopVotedCandidate', 'q', 'q', 'q', 'q', 'q', 'q'],
  inputs = [
    [
      [0, 1, 1, 0, 0, 1, 0],
      [0, 5, 10, 15, 20, 25, 30],
    ],
    [3],
    [12],
    [25],
    [15],
    [24],
    [8],
  ],
  outputs = [null, 0, 1, 1, 0, 0, 1];
test(ops, inputs, outputs);

var ops = ['TopVotedCandidate', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'],
  inputs = [
    [
      [0, 0, 0, 0, 1],
      [0, 6, 39, 52, 75],
    ],
    [45],
    [49],
    [59],
    [68],
    [42],
    [37],
    [99],
    [26],
    [78],
    [43],
  ],
  outputs = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
test(ops, inputs, outputs);

var ops = ['TopVotedCandidate', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'],
  inputs = [
    [
      [0, 1, 0, 1, 1],
      [24, 29, 31, 76, 81],
    ],
    [28],
    [24],
    [29],
    [77],
    [30],
    [25],
    [76],
    [75],
    [81],
    [80],
  ],
  outputs = [null, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1];
test(ops, inputs, outputs);

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    if (op === 'q') {
      result = obj.q(...args);
    } else {
      obj = new TopVotedCandidate(...args);
    }
    console.log(i, op, args, expected, result, result === expected);
  }
}
