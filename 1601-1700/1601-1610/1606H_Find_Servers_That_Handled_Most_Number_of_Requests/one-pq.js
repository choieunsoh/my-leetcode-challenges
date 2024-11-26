// 1606. Find Servers That Handled Most Number of Requests
// https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/
// T.C.: O(n log k)
// S.C.: O(k)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
  const count = new Array(k).fill(0);
  const free = new Set([...count.keys()]);
  const busy = new MinPriorityQueue({ priority: (x) => x.endTime });

  for (let i = 0; i < arrival.length; i++) {
    const start = arrival[i];

    // Free up servers that have completed their tasks.
    while (!busy.isEmpty() && busy.front().element.endTime <= start) {
      const { serverId } = busy.dequeue().element;
      free.add(serverId);
    }

    if (free.size > 0) {
      let serverId = [...free].find((id) => id >= i % k);
      if (serverId === undefined) {
        serverId = Math.min(...free);
      }

      free.delete(serverId);
      busy.enqueue({ endTime: start + load[i], serverId });
      count[serverId]++;
    }
  }

  const maxJob = Math.max(...count);
  return count.flatMap((job, index) => (job === maxJob ? [index] : []));
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
