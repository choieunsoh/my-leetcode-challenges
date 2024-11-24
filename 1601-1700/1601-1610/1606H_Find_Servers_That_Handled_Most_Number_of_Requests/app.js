// 1606. Find Servers That Handled Most Number of Requests
// https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/
// T.C.: O(n log k)
// S.C.: O(k)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
  const n = arrival.length;
  let beforeMinPQ = new PriorityQueue({ compare: (a, b) => a - b });
  let afterMinPQ = new PriorityQueue({ compare: (a, b) => a - b });
  const endTimeMinPQ = new PriorityQueue({ compare: (a, b) => a.endTime - b.endTime });
  const serversUseCount = new Array(k).fill(0);

  for (let serverId = 0; serverId < k; serverId++) {
    beforeMinPQ.enqueue(serverId);
  }

  for (let i = 0; i < n; i++) {
    const startTime = arrival[i];
    const endTime = startTime + load[i];

    let currentServerId = i % k;

    // if server 0 then loopback
    if (currentServerId === 0) {
      afterMinPQ = beforeMinPQ;
      beforeMinPQ = new PriorityQueue({ compare: (a, b) => a - b });
    }

    // free up freeServers
    while (!endTimeMinPQ.isEmpty() && endTimeMinPQ.front().endTime <= startTime) {
      const server = endTimeMinPQ.dequeue();
      if (server.serverId < currentServerId) {
        beforeMinPQ.enqueue(server.serverId);
      } else {
        afterMinPQ.enqueue(server.serverId);
      }
    }

    // assign from after. if no avail then from before else drop
    let serverToUse;
    if (!afterMinPQ.isEmpty()) {
      serverToUse = afterMinPQ;
    } else if (!beforeMinPQ.isEmpty()) {
      serverToUse = beforeMinPQ;
    } else {
      // drop
      continue;
    }

    const serverId = serverToUse.dequeue();
    endTimeMinPQ.enqueue({ serverId, endTime });

    // inc server use count
    serversUseCount[serverId]++;
  }

  const maxUseCount = Math.max(...serversUseCount);
  const result = [];
  for (let i = 0; i < k; i++) {
    if (serversUseCount[i] === maxUseCount) {
      result.push(i);
    }
  }
  return result;
};

var k = 3,
  arrival = [1, 2, 3, 4, 5],
  load = [5, 2, 3, 3, 3];
var expected = [1];
var result = busiestServers(k, arrival, load);
console.log(result, result.join() === expected.join());

var k = 3,
  arrival = [1, 2, 3, 4],
  load = [1, 2, 1, 2];
var expected = [0];
var result = busiestServers(k, arrival, load);
console.log(result, result.join() === expected.join());

var k = 3,
  arrival = [1, 2, 3],
  load = [10, 12, 11];
var expected = [0, 1, 2];
var result = busiestServers(k, arrival, load);
console.log(result, result.join() === expected.join());
