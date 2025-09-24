// 3668. Restore Finishing Order
// https://leetcode.com/problems/restore-finishing-order/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  const result = [];
  const friendsSet = new Set(friends);
  for (const id of order) {
    if (friendsSet.has(id)) result.push(id);
  }
  return result;
};

var order = [3, 1, 2, 5, 4],
  friends = [1, 3, 4];
var expected = [3, 1, 4];
var result = recoverOrder(order, friends);
console.log(result, result.join() === expected.join());

var order = [1, 4, 5, 3, 2],
  friends = [2, 5];
var expected = [5, 2];
var result = recoverOrder(order, friends);
console.log(result, result.join() === expected.join());
