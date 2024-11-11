// 2162. Minimum Cost to Set Cooking Time
// https://leetcode.com/problems/minimum-cost-to-set-cooking-time/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function (startAt, moveCost, pushCost, targetSeconds) {
  let cost = Number.MAX_SAFE_INTEGER;
  const totalMinutes = (targetSeconds / 60) | 0;
  for (let min = 0; min <= totalMinutes; min++) {
    const sec = targetSeconds - min * 60;
    if (sec > 99 || min > 99) continue;

    const buttons = (100 * min + sec).toString();
    let prevButton = Number(buttons[0]);
    let sum = 0;
    let buttonIndex = 0;

    if (prevButton === startAt) {
      sum += pushCost;
      buttonIndex = 1;
    } else {
      sum += moveCost;
    }

    for (let j = buttonIndex; j < buttons.length; j++) {
      const button = Number(buttons[j]);
      if (button === prevButton) {
        sum += pushCost;
      } else {
        sum += moveCost + pushCost;
      }
      prevButton = button;
    }

    cost = Math.min(cost, sum);
  }
  return cost;
};

var startAt = 1,
  moveCost = 2,
  pushCost = 1,
  targetSeconds = 600;
var expected = 6;
var result = minCostSetTime(startAt, moveCost, pushCost, targetSeconds);
console.log(result, result === expected);

var startAt = 0,
  moveCost = 1,
  pushCost = 2,
  targetSeconds = 76;
var expected = 6;
var result = minCostSetTime(startAt, moveCost, pushCost, targetSeconds);
console.log(result, result === expected);
