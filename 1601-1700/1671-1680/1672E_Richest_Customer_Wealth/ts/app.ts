// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/
var maximumWealth = function (accounts: number[][]): number {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[0].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) max = sum;
  }
  return max;
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
