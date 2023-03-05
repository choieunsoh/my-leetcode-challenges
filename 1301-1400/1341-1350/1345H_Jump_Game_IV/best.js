// 1345. Jump Game IV
// https://leetcode.com/problems/jump-game-iv/
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  let groups = new Map();
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    let group = groups.get(v);
    if (group) {
      group.push(i);
    } else {
      group = [i];
      groups.set(v, group);
    }
  }

  const costs = [0];
  let baseCost = 0;
  let work = [0];
  const goal = arr.length - 1;

  while (work.length) {
    const newWork = [];
    const groupCost = baseCost + 1;
    for (const i of work) {
      const v = arr[i];
      if (v === undefined) continue;
      arr[i] = undefined;

      const before = i - 1;
      const after = i + 1;
      if (before >= 0 && costs[before] === undefined) {
        costs[before] = groupCost;
        newWork.push(before);
      }
      if (after <= goal && costs[after] === undefined) {
        if (after === goal) return groupCost;
        costs[after] = groupCost;
        newWork.push(after);
      }

      const group = groups.get(v);
      if (!group) continue;
      groups.delete(v);
      for (const j of group) {
        if (j === i) continue;
        if (j === goal) return groupCost;
        if (costs[j] === undefined) {
          newWork.push(j);
          costs[j] = groupCost;
        }
      }
    }
    baseCost = groupCost;
    work = newWork;
  }

  return costs[arr.length - 1];
};

var arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
var expected = 3;
var result = minJumps(arr);
console.log(result, result == expected);

var arr = [7];
var expected = 0;
var result = minJumps(arr);
console.log(result, result == expected);

var arr = [7, 6, 9, 6, 9, 6, 9, 7];
var expected = 1;
var result = minJumps(arr);
console.log(result, result == expected);
