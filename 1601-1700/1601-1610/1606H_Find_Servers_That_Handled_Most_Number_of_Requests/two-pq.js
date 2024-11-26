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
  const free = new MinPriorityQueue();
  const busy = new MinPriorityQueue({ priority: (x) => x.endTime });

  for (let i = 0; i < k; i++) {
    free.enqueue(i);
  }

  for (let i = 0; i < arrival.length; i++) {
    const start = arrival[i];

    // Remove free servers from 'busy', modify their IDs and
    // add them to 'free'
    while (!busy.isEmpty() && busy.front().element.endTime <= start) {
      const { serverId } = busy.dequeue().element;
      const modifiedId = ((((serverId - i) % k) + k) % k) + i;
      free.enqueue(modifiedId);
    }

    // Get the original server ID by taking the remainder of
    // the modified ID to k.
    if (!free.isEmpty()) {
      const serverId = free.dequeue().element % k;
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
