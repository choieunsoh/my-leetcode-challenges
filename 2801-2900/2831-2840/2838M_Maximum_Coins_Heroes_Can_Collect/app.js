// 2838. Maximum Coins Heroes Can Collect
// https://leetcode.com/problems/maximum-coins-heroes-can-collect/description/
// T.C.: O((n+m)log m)
// S.C.: O(n+m)
/**
 * @param {number[]} heroes
 * @param {number[]} monsters
 * @param {number[]} coins
 * @return {number[]}
 */
var maximumCoins = function (heroes, monsters, coins) {
  const monsterPowerAndCoins = monsters.map((monsterHP, i) => [monsterHP, coins[i]]);
  monsterPowerAndCoins.sort((a, b) => a[0] - b[0]);

  const n = heroes.length;
  const m = monsters.length;
  const coinsSum = new Array(m);
  let prefixSum = 0;
  for (let i = 0; i < m; i++) {
    prefixSum += monsterPowerAndCoins[i][1];
    coinsSum[i] = prefixSum;
  }

  const minMonsterPower = monsterPowerAndCoins[0][0];
  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (heroes[i] < minMonsterPower) continue;
    result[i] = findTotalCoins(heroes[i]);
  }
  return result;

  function findTotalCoins(heroPower) {
    let left = 0;
    let right = m - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (monsterPowerAndCoins[mid][0] > heroPower) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return coinsSum[right];
  }
};

var heroes = [1, 4, 2],
  monsters = [1, 1, 5, 2, 3],
  coins = [2, 3, 4, 5, 6];
var expected = [5, 16, 10];
var result = maximumCoins(heroes, monsters, coins);
console.log(result, result.join() === expected.join());

var heroes = [5],
  monsters = [2, 3, 1, 2],
  coins = [10, 6, 5, 2];
var expected = [23];
var result = maximumCoins(heroes, monsters, coins);
console.log(result, result.join() === expected.join());

var heroes = [4, 4],
  monsters = [5, 7, 8],
  coins = [1, 1, 1];
var expected = [0, 0];
var result = maximumCoins(heroes, monsters, coins);
console.log(result, result.join() === expected.join());

var heroes = [68, 100],
  monsters = [20],
  coins = [79];
var expected = [79, 79];
var result = maximumCoins(heroes, monsters, coins);
console.log(result, result.join() === expected.join());
