// 3408. Design Task Manager
// https://leetcode.com/problems/design-task-manager/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} tasks
 */
var TaskManager = function (tasks) {
  // [userId, taskId, priority]
  this.queue = new PriorityQueue({ compare: (a, b) => b[2] - a[2] || b[1] - a[1] });
  this.tasks = new Map();
  for (const task of tasks) {
    this.queue.enqueue(task);
    this.tasks.set(task[1], task);
  }
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
  this.queue.enqueue([userId, taskId, priority]);
  this.tasks.set(taskId, [userId, taskId, priority]);
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
  const [userId] = this.tasks.get(taskId);
  this.tasks.set(taskId, [userId, taskId, newPriority]);
  this.queue.enqueue([userId, taskId, newPriority]);
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function (taskId) {
  this.tasks.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function () {
  while (!this.queue.isEmpty()) {
    const [userId, taskId, priority] = this.queue.dequeue();
    if (!this.tasks.has(taskId)) {
      continue;
    }

    const curr = this.tasks.get(taskId);
    if (userId === curr[0] && priority === curr[2]) {
      this.tasks.delete(taskId);
      return userId;
    }
  }
  return -1;
};

/**
 * Your TaskManager object will be instantiated and called as such:
 * var obj = new TaskManager(tasks)
 * obj.add(userId,taskId,priority)
 * obj.edit(taskId,newPriority)
 * obj.rmv(taskId)
 * var param_4 = obj.execTop()
 */

function run(ops, inputs, outputs) {
  var obj = new TaskManager(inputs[0][0]);
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    const result = obj[op](...input) ?? null;
    console.log(i, op, input, result, result === expected);
  }
  console.log('--------------------------------');
}

var ops = ['TaskManager', 'add', 'edit', 'execTop', 'rmv', 'add', 'execTop'],
  inputs = [
    [
      [
        [1, 101, 10],
        [2, 102, 20],
        [3, 103, 15],
      ],
    ],
    [4, 104, 5],
    [102, 8],
    [],
    [101],
    [5, 105, 15],
    [],
  ],
  outputs = [null, null, null, 3, null, null, 5];
run(ops, inputs, outputs);

var ops = ['TaskManager', 'add', 'edit', 'execTop', 'rmv', 'add', 'execTop'],
  inputs = [
    [
      [
        [1, 101, 10],
        [2, 102, 20],
        [3, 103, 15],
      ],
    ],
    [4, 104, 5],
    [102, 8],
    [],
    [101],
    [5, 105, 15],
    [],
  ],
  outputs = [null, null, null, 3, null, null, 5];
run(ops, inputs, outputs);

var ops = ['TaskManager', 'rmv', 'add', 'rmv', 'add', 'execTop', 'execTop'],
  inputs = [[[[8, 21, 43]]], [21], [6, 15, 38], [15], [3, 15, 23], [], []],
  outputs = [null, null, null, null, null, 3, -1];
run(ops, inputs, outputs);
