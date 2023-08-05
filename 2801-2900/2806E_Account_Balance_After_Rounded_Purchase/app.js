// 2806. Account Balance After Rounded Purchase
// https://leetcode.com/problems/account-balance-after-rounded-purchase/
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  return 100 - Math.round(purchaseAmount / 10) * 10;
};

var purchaseAmount = 9;
var expected = 90;
var result = accountBalanceAfterPurchase(purchaseAmount);
console.log(result, result === expected);

var purchaseAmount = 11;
var expected = 90;
var result = accountBalanceAfterPurchase(purchaseAmount);
console.log(result, result === expected);

var purchaseAmount = 15;
var expected = 80;
var result = accountBalanceAfterPurchase(purchaseAmount);
console.log(result, result === expected);
