const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} tasks
 */
var TaskManager = function (tasks) {
  // [userId, taskId, priority]
  this.pq = new PriorityQueue({ compare: (a, b) => b[2] - a[2] || b[1] - a[1] });
  this.map = new Map();
  for (const task of tasks) {
    this.pq.enqueue(task);
    this.map.set(task[1], task);
  }
  this.invalidTasks = new Set();
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @param {number} priority
 * @return {void}
 */
TaskManager.prototype.add = function (userId, taskId, priority) {
  this.pq.enqueue([userId, taskId, priority]);
  this.map.set(taskId, [userId, taskId, priority]);
};

/**
 * @param {number} taskId
 * @param {number} newPriority
 * @return {void}
 */
TaskManager.prototype.edit = function (taskId, newPriority) {
  const [userId, , oldPriority] = this.map.get(taskId);
  this.map.set(taskId, [userId, taskId, newPriority]);
  this.pq.enqueue([userId, taskId, newPriority]);
  if (oldPriority !== newPriority) this.invalidTasks.add(`${userId}-${taskId}-${oldPriority}`);
};

/**
 * @param {number} taskId
 * @return {void}
 */
TaskManager.prototype.rmv = function (taskId) {
  const [userId, , priority] = this.map.get(taskId);
  this.invalidTasks.add(`${userId}-${taskId}-${priority}`);
  this.map.delete(taskId);
};

/**
 * @return {number}
 */
TaskManager.prototype.execTop = function () {
  while (!this.pq.isEmpty()) {
    const [userId, taskId, priority] = this.pq.dequeue();
    const key = `${userId}-${taskId}-${priority}`;
    if (this.invalidTasks.has(key)) {
      continue;
    }
    if (this.map.has(taskId)) {
      this.rmv(taskId);
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
