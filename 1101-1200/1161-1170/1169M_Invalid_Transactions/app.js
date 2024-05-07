// 1169. Invalid Transactions
// https://leetcode.com/problems/invalid-transactions/description/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function (transactions) {
  const map = new Map();
  for (const transaction of transactions) {
    const [name, time, , city] = transaction.split(',');
    if (!map.has(name)) map.set(name, []);
    map.get(name).push(transaction);
  }

  const result = [];
  for (const transaction of transactions) {
    if (isInvalid(transaction)) result.push(transaction);
  }

  return result;

  function isInvalid(transaction) {
    const [name, time, amount, city] = transaction.split(',');
    if (Number(amount) > 1000) {
      return true;
    }

    const prevTransactions = map.get(name) ?? [];
    for (const prevTransaction of prevTransactions) {
      const [, prevTime, , prevCity] = prevTransaction.split(',');
      if (prevCity === city) continue;
      if (Math.abs(time - Number(prevTime)) > 60) continue;

      return true;
    }

    return false;
  }
};

var transactions = ['alice,20,800,mtv', 'alice,50,100,beijing'];
var expected = ['alice,20,800,mtv', 'alice,50,100,beijing'];
var result = invalidTransactions(transactions);
console.log(result, result.sort().join() === expected.sort().join());

var transactions = ['alice,20,800,mtv', 'alice,50,1200,mtv'];
var expected = ['alice,50,1200,mtv'];
var result = invalidTransactions(transactions);
console.log(result, result.sort().join() === expected.sort().join());

var transactions = ['alice,20,800,mtv', 'bob,50,1200,mtv'];
var expected = ['bob,50,1200,mtv'];
var result = invalidTransactions(transactions);
console.log(result, result.sort().join() === expected.sort().join());

var transactions = ['alice,20,800,mtv', 'alice,50,100,mtv', 'alice,51,100,frankfurt'];
var expected = ['alice,20,800,mtv', 'alice,50,100,mtv', 'alice,51,100,frankfurt'];
var result = invalidTransactions(transactions);
console.log(result, result.sort().join() === expected.sort().join());

var transactions = ['alice,20,1220,mtv', 'alice,20,1220,mtv'];
var expected = ['alice,20,1220,mtv', 'alice,20,1220,mtv'];
var result = invalidTransactions(transactions);
console.log(result, result.sort().join() === expected.sort().join());
