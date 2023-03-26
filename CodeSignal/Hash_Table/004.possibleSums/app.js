// possibleSums
/**
 * @param {number[]} coins
 * @param {number[]} quantity
 * @return {number}
 */
function solution(coins, quantity) {
  let result = new Set();
  result.add(0);
  for (let i = 0; i < quantity.length; i++) {
    const nums = [...result];
    const coin = coins[i];
    const qty = quantity[i];
    for (const sum of nums) {
      for (let j = 1; j <= qty; j++) {
        result.add(sum + j * coin);
      }
    }
  }

  return result.size - 1;
}

var coins = [10, 50, 100],
  quantity = [1, 2, 1];
var expected = 9;
var result = solution(coins, quantity);
console.log(result, result === expected);
