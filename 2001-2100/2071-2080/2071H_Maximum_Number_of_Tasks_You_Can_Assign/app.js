// 2071. Maximum Number of Tasks You Can Assign
// https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/description/
// T.C.: O(n log n + m log m)
// S.C.: O(n)
const { Deque } = require('@datastructures-js/deque');
/**
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, strength) {
  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const taskCount = tasks.length;
  const workerCount = workers.length;

  let maxTasks = 0;
  let left = 1;
  let right = Math.min(taskCount, workerCount);
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (check(mid)) {
      maxTasks = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return maxTasks;

  function check(mid) {
    let index = workerCount - 1;
    let remainPills = pills;
    const deque = new Deque();
    for (let i = mid - 1; i >= 0; i--) {
      while (index >= workerCount - mid && workers[index] + strength >= tasks[i]) {
        deque.pushFront(workers[index--]);
      }

      if (deque.isEmpty()) {
        return false;
      }

      if (deque.back() >= tasks[i]) {
        deque.popBack();
      } else {
        if (remainPills === 0) {
          return false;
        }

        remainPills--;
        deque.popFront();
      }
    }
    return true;
  }
};

var tasks = [3, 2, 1],
  workers = [0, 3, 3],
  pills = 1,
  strength = 1;
var expected = 3;
var result = maxTaskAssign(tasks, workers, pills, strength);
console.log(result, result === expected);

var tasks = [5, 4],
  workers = [0, 0, 0],
  pills = 1,
  strength = 5;
var expected = 1;
var result = maxTaskAssign(tasks, workers, pills, strength);
console.log(result, result === expected);

var tasks = [10, 15, 30],
  workers = [0, 10, 10, 10, 10],
  pills = 3,
  strength = 10;
var expected = 2;
var result = maxTaskAssign(tasks, workers, pills, strength);
console.log(result, result === expected);

var tasks = [5, 9, 8, 5, 9],
  workers = [1, 6, 4, 2, 6],
  pills = 1,
  strength = 5;
var expected = 3;
var result = maxTaskAssign(tasks, workers, pills, strength);
console.log(result, result === expected);

var tasks = [
    7784, 8300, 5021, 5500, 3351, 9550, 3923, 2957, 5374, 8466, 5957, 3702, 3855, 3885, 8866, 6694, 6374, 8122, 4664,
    1082, 9926, 1715, 6433, 6233, 4975, 2309, 5288, 8340, 7632, 3592, 7399, 9122, 4955, 9607, 5451, 9521, 8906, 9190,
    2028, 3724, 9018, 8560, 7572, 3224, 7888, 9868, 6721, 9825, 7354, 9026, 3716,
  ],
  workers = [
    4115, 1308, 3901, 789, 523, 4092, 4886, 1031, 914, 3364, 1259, 1745, 1390, 4219, 4473, 1641, 4257, 4075, 4605, 4162,
    3311, 2622, 4253, 3967, 3190, 4757, 4787, 1758, 2444, 3146, 769, 2102, 4423, 704, 1453, 2927, 4066, 2519, 2870,
    1229, 878, 1365, 2838, 1832, 4410, 1657, 3457, 3782, 2072, 3366, 1995, 1153, 2094, 3995, 2201, 1286, 3027, 4299,
    4779, 3969, 4166, 2208, 2678, 3484, 1449, 563, 2216, 3972, 3846, 3628, 2136, 1074, 3969, 1229, 952, 3350, 2586,
    3450, 4242, 3974, 2086, 2814, 4323, 2908, 4649, 4591, 4657, 2659, 3814, 4117, 3297, 3358, 2769, 4453, 4159, 4407,
    4431, 1187, 4922, 3506, 3819, 1880, 3905, 1036, 3008, 633, 3184, 3138, 1105, 3748, 3563, 2812, 2026, 2473, 1880,
    3020, 1281, 936, 2301, 1105, 3954, 2070, 4098, 631, 3715, 2149, 3279, 2062, 4782, 3176, 890, 910, 799, 3497, 3752,
    3158, 1904, 1792, 1461, 3329, 1845, 755, 4896, 4687, 3361, 1222, 3755, 4098, 3348, 988, 1692, 4143, 4356, 4199,
    4120, 1934, 3398, 3969, 3312, 4700, 4255, 3680, 2092, 1294, 4046, 1749, 838, 2035, 2057, 4012, 3450, 3581, 908, 924,
    1855, 3047, 2329, 905, 1947, 1316, 3452, 2020, 2979, 850, 3742, 4012, 1136, 3329, 2096, 4527, 1833, 1879, 3822,
    4335, 3189, 805, 1918, 1943, 3945, 1754, 4705,
  ],
  pills = 164,
  strength = 7421;
var expected = 51;
var result = maxTaskAssign(tasks, workers, pills, strength);
console.log(result, result === expected);
