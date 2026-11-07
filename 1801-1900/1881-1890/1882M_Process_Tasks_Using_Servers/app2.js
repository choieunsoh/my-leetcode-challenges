// 1882. Process Tasks Using Servers
// https://leetcode.com/problems/process-tasks-using-servers/description/
// T.C.: O(m + n log m)
// S.C.: O(m)
/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function (servers, tasks) {
  const n = servers.length;
  const m = tasks.length;
  const ans = new Array(m);

  const free = [];
  const busy = [];

  const compareFree = (a, b) => {
    if (servers[a] !== servers[b]) {
      return servers[a] - servers[b];
    }
    return a - b;
  };

  const compareBusy = (a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return compareFree(a[1], b[1]);
  };

  const pushFree = (x) => {
    free.push(x);
    let i = free.length - 1;

    while (i > 0) {
      const p = Math.floor((i - 1) / 2);

      if (compareFree(free[p], free[i]) <= 0) break;

      [free[p], free[i]] = [free[i], free[p]];
      i = p;
    }
  };

  const popFree = () => {
    const result = free[0];
    const last = free.pop();

    if (free.length > 0) {
      free[0] = last;
      let i = 0;

      while (true) {
        let smallest = i;
        const left = i * 2 + 1;
        const right = i * 2 + 2;

        if (left < free.length && compareFree(free[left], free[smallest]) < 0) {
          smallest = left;
        }

        if (right < free.length && compareFree(free[right], free[smallest]) < 0) {
          smallest = right;
        }

        if (smallest === i) break;

        [free[i], free[smallest]] = [free[smallest], free[i]];
        i = smallest;
      }
    }

    return result;
  };

  const pushBusy = (item) => {
    busy.push(item);
    let i = busy.length - 1;

    while (i > 0) {
      const p = Math.floor((i - 1) / 2);

      if (compareBusy(busy[p], busy[i]) <= 0) break;

      [busy[p], busy[i]] = [busy[i], busy[p]];
      i = p;
    }
  };

  const popBusy = () => {
    const result = busy[0];
    const last = busy.pop();

    if (busy.length > 0) {
      busy[0] = last;
      let i = 0;

      while (true) {
        let smallest = i;
        const left = i * 2 + 1;
        const right = i * 2 + 2;

        if (left < busy.length && compareBusy(busy[left], busy[smallest]) < 0) {
          smallest = left;
        }

        if (right < busy.length && compareBusy(busy[right], busy[smallest]) < 0) {
          smallest = right;
        }

        if (smallest === i) break;

        [busy[i], busy[smallest]] = [busy[smallest], busy[i]];
        i = smallest;
      }
    }

    return result;
  };

  for (let i = 0; i < n; i++) {
    pushFree(i);
  }

  let time = 0;

  for (let i = 0; i < m; i++) {
    time = Math.max(time, i);

    while (busy.length > 0 && busy[0][0] <= time) {
      pushFree(popBusy()[1]);
    }

    if (free.length === 0) {
      time = busy[0][0];

      while (busy.length > 0 && busy[0][0] <= time) {
        pushFree(popBusy()[1]);
      }
    }

    const server = popFree();

    ans[i] = server;
    pushBusy([time + tasks[i], server]);
  }

  return ans;
};

var servers = [3, 3, 2],
  tasks = [1, 2, 3, 2, 1, 2];
var expected = [2, 2, 0, 2, 1, 2];
var result = assignTasks(servers, tasks);
console.log(result, result.toString() === expected.toString());

var servers = [5, 1, 4, 3, 2],
  tasks = [2, 1, 2, 4, 5, 2, 1];
var expected = [1, 4, 1, 4, 1, 3, 2];
var result = assignTasks(servers, tasks);
console.log(result, result.toString() === expected.toString());
