// 2590. Design a Todo List
// https://leetcode.com/problems/design-a-todo-list/description/
// T.C.: O(n log n)
// S.C.: O(n)

var TodoList = function () {
  this.taskId = 0;
  this.tasks = new Map();
};

/**
 * @param {number} userId
 * @param {string} taskDescription
 * @param {number} dueDate
 * @param {string[]} tags
 * @return {number}
 */
TodoList.prototype.addTask = function (userId, taskDescription, dueDate, tags) {
  this.taskId++;
  if (!this.tasks.has(userId)) {
    this.tasks.set(userId, new Map());
  }

  const newTask = {
    id: this.taskId,
    description: taskDescription,
    dueDate,
    tags: new Set(tags),
    completed: false,
  };
  const tasks = this.tasks.get(userId);
  tasks.set(this.taskId, newTask);

  return this.taskId;
};

/**
 * @param {number} userId
 * @return {string[]}
 */
TodoList.prototype.getAllTasks = function (userId) {
  if (!this.tasks.has(userId)) {
    return [];
  }

  const tasks = this.tasks.get(userId);
  const pendingTasks = [...tasks.values()].filter((task) => !task.completed);
  return pendingTasks.sort((a, b) => a.dueDate - b.dueDate).map((task) => task.description);
};

/**
 * @param {number} userId
 * @param {string} tag
 * @return {string[]}
 */
TodoList.prototype.getTasksForTag = function (userId, tag) {
  if (!this.tasks.has(userId)) {
    return [];
  }

  const tasks = this.tasks.get(userId);
  const pendingTasks = [...tasks.values()].filter((task) => !task.completed && task.tags.has(tag));
  return pendingTasks.sort((a, b) => a.dueDate - b.dueDate).map((task) => task.description);
};

/**
 * @param {number} userId
 * @param {number} taskId
 * @return {void}
 */
TodoList.prototype.completeTask = function (userId, taskId) {
  if (!this.tasks.has(userId)) {
    return;
  }

  const tasks = this.tasks.get(userId);
  if (tasks.has(taskId)) {
    tasks.get(taskId).completed = true;
  }
};

/**
 * Your TodoList object will be instantiated and called as such:
 * var obj = new TodoList()
 * var param_1 = obj.addTask(userId,taskDescription,dueDate,tags)
 * var param_2 = obj.getAllTasks(userId)
 * var param_3 = obj.getTasksForTag(userId,tag)
 * obj.completeTask(userId,taskId)
 */

function run(ops, inputs, outputs) {
  var todoList = new TodoList();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i];
    const result = todoList[op](...input) ?? null;
    console.log(i, op, input, result, JSON.stringify(result) === JSON.stringify(expected));
  }
  console.log('--------------------------------');
}

var ops = [
    'TodoList',
    'addTask',
    'addTask',
    'getAllTasks',
    'getAllTasks',
    'addTask',
    'getTasksForTag',
    'completeTask',
    'completeTask',
    'getTasksForTag',
    'getAllTasks',
  ],
  inputs = [
    [],
    [1, 'Task1', 50, []],
    [1, 'Task2', 100, ['P1']],
    [1],
    [5],
    [1, 'Task3', 30, ['P1']],
    [1, 'P1'],
    [5, 1],
    [1, 2],
    [1, 'P1'],
    [1],
  ],
  outputs = [null, 1, 2, ['Task1', 'Task2'], [], 3, ['Task3', 'Task2'], null, null, ['Task3'], ['Task3', 'Task1']];
run(ops, inputs, outputs);
