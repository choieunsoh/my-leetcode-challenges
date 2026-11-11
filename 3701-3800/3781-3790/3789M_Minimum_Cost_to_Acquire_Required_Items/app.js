// 3789. Minimum Cost to Acquire Required Items
// https://leetcode.com/problems/minimum-cost-to-acquire-required-items/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function (cost1, cost2, costBoth, need1, need2) {
  let totalCost = 0;

  // Buying separately is cheaper; item 3 is unnecessary
  if (cost1 + cost2 <= costBoth) {
    totalCost = cost1 * need1 + cost2 * need2;
  } else {
    // Buy item 3 first until one requirement is fulfilled
    let cnt_3 = Math.min(need1, need2);
    totalCost = cnt_3 * costBoth;

    need1 -= cnt_3;
    need2 -= cnt_3;

    // Type 1 is still needed; choose the cheaper of items 1 and 3
    if (need1 > 0) {
      totalCost += need1 * Math.min(cost1, costBoth);
      // Type 2 is still needed; choose the cheaper of items 2 and 3
    } else if (need2 > 0) {
      totalCost += need2 * Math.min(cost2, costBoth);
    }
  }

  return totalCost;
};

var cost1 = 3,
  cost2 = 2,
  costBoth = 1,
  need1 = 3,
  need2 = 2;
var expected = 3;
var result = minimumCost(cost1, cost2, costBoth, need1, need2);
console.log(result, result === expected);

var cost1 = 5,
  cost2 = 4,
  costBoth = 15,
  need1 = 2,
  need2 = 3;
var expected = 22;
var result = minimumCost(cost1, cost2, costBoth, need1, need2);
console.log(result, result === expected);

var cost1 = 5,
  cost2 = 4,
  costBoth = 15,
  need1 = 0,
  need2 = 0;
var expected = 0;
var result = minimumCost(cost1, cost2, costBoth, need1, need2);
console.log(result, result === expected);
