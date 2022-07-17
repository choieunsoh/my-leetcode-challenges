// https://leetcode.com/problems/richest-customer-wealth/
// 1672. Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((account) =>
      account.reduce((wealth, money) => wealth + money, 0)
    )
  );
};

var accounts = [
    [1, 2, 3],
    [3, 2, 1],
  ],
  expected = 6;
var result = maximumWealth(accounts);
console.log(result, result === expected);

var accounts = [
    [1, 5],
    [7, 3],
    [3, 5],
  ],
  expected = 10;
var result = maximumWealth(accounts);
console.log(result, result === expected);

var accounts = [
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ],
  expected = 17;
var result = maximumWealth(accounts);
console.log(result, result === expected);
