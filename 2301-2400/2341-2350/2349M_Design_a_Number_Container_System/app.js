// 2349. Design a Number Container System
// https://leetcode.com/problems/design-a-number-container-system/description/
// T.C.: O()
// S.C.: O()
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var NumberContainers = function () {
  this.indexToNumberMap = new Map();
  this.numberToPQMap = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  const { numberToPQMap, indexToNumberMap } = this;
  if (!numberToPQMap.has(number)) {
    numberToPQMap.set(number, new MinPriorityQueue({ priority: (x) => x.index }));
  }
  const pq = numberToPQMap.get(number);
  pq.enqueue({ index, number });

  indexToNumberMap.set(index, number);
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  const { numberToPQMap, indexToNumberMap } = this;
  if (!numberToPQMap.has(number)) return -1;

  const pq = numberToPQMap.get(number);
  while (!pq.isEmpty()) {
    const front = pq.front().element;
    if (front.number === indexToNumberMap.get(front.index)) {
      return front.index;
    }
    pq.dequeue();
  }
  return -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

function run(ops, inputs, outputs) {
  let obj = new NumberContainers();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const output = outputs[i];
    const result = obj[op](...input) ?? null;
    console.log(i, op, input, result, result === output);
  }
}

var ops = ['NumberContainers', 'find', 'change', 'change', 'change', 'change', 'find', 'change', 'find'],
  inputs = [[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]],
  outputs = [null, -1, null, null, null, null, 1, null, 2];
run(ops, inputs, outputs);
