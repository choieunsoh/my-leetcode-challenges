// 2043. Simple Bank System
// https://leetcode.com/problems/simple-bank-system/description/
// T.C.: O(1)
// S.C.: O(n)
/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balance = balance;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (account1 > this.balance.length) return false;
  if (account2 > this.balance.length) return false;
  const balance1 = this.balance[account1 - 1];
  if (balance1 < money) return false;
  this.balance[account1 - 1] -= money;
  this.balance[account2 - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (account > this.balance.length) return false;
  this.balance[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (account > this.balance.length) return false;
  const balance = this.balance[account - 1];
  if (balance < money) return false;
  this.balance[account - 1] -= money;
  return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

function run(ops, input, output) {
  let obj;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = input[i];
    const expected = output[i];
    let result = null;
    switch (op) {
      case 'Bank':
        obj = new Bank(...args);
        break;
      case 'transfer':
        result = obj.transfer(...args);
        break;
      case 'deposit':
        result = obj.deposit(...args);
        break;
      case 'withdraw':
        result = obj.withdraw(...args);
        break;
    }
    console.log(i, ops[i], result, result === expected);
  }
}

var ops = ['Bank', 'withdraw', 'transfer', 'deposit', 'transfer', 'withdraw'],
  input = [[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]],
  output = [null, true, true, true, false, false];
run(ops, input, output);
