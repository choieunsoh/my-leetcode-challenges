// 2591. Distribute Money to Maximum Children
// https://leetcode.com/problems/distribute-money-to-maximum-children/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  money -= children;
  if (money < 0) return -1;

  const distributed = (money / 7) | 0;
  if (distributed === children && money % 7 === 0) return children;
  if (distributed === children - 1 && money % 7 === 3) return children - 2;
  return Math.min(children - 1, distributed);
};

var money = 20,
  children = 3;
var expected = 1;
var result = distMoney(money, children);
console.log(result, result === expected);

var money = 16,
  children = 2;
var expected = 2;
var result = distMoney(money, children);
console.log(result, result === expected);

var money = 15,
  children = 2;
var expected = 1;
var result = distMoney(money, children);
console.log(result, result === expected);
