// 3387. Maximize Amount After Two Days of Conversions
// https://leetcode.com/problems/maximize-amount-after-two-days-of-conversions/description/
// T.C.: O(E+V)
// S.C.: O(E+V)
/**
 * @param {string} initialCurrency
 * @param {string[][]} pairs1
 * @param {number[]} rates1
 * @param {string[][]} pairs2
 * @param {number[]} rates2
 * @return {number}
 */
var maxAmount = function (initialCurrency, pairs1, rates1, pairs2, rates2) {
  const graphDay1 = buildGraph(pairs1, rates1);
  const graphDay2 = buildGraph(pairs2, rates2);
  const maxRatesDay1 = bfs(graphDay1, initialCurrency);

  let maxAmount = 1.0;
  for (const [currencyDay1, amountDay1] of maxRatesDay1) {
    const maxRatesDay2 = bfs(graphDay2, currencyDay1);
    for (const [currencyDay2, amountDay2] of maxRatesDay2) {
      if (currencyDay2 !== initialCurrency) continue;
      maxAmount = Math.max(maxAmount, amountDay1 * amountDay2);
    }
  }
  return maxAmount;

  function buildGraph(pairs, rates) {
    const graph = new Map();
    for (let i = 0; i < pairs.length; i++) {
      const [from, to] = pairs[i];
      const rate = rates[i];
      if (!graph.has(from)) graph.set(from, []);
      if (!graph.has(to)) graph.set(to, []);
      graph.get(from).push([to, rate]);
      graph.get(to).push([from, 1 / rate]);
    }
    return graph;
  }

  function bfs(graph, startCurrency) {
    const maxRates = new Map();
    const queue = [[startCurrency, 1.0]];
    maxRates.set(startCurrency, 1.0);
    while (queue.length > 0) {
      const [currency, rate] = queue.shift();
      if (!graph.has(currency)) continue;

      for (const [neighborCurrency, neighborRate] of graph.get(currency)) {
        const newRate = rate * neighborRate;
        if (newRate > (maxRates.get(neighborCurrency) ?? 0)) {
          maxRates.set(neighborCurrency, newRate);
          queue.push([neighborCurrency, newRate]);
        }
      }
    }
    return maxRates;
  }
};

var initialCurrency = 'EUR',
  pairs1 = [
    ['EUR', 'USD'],
    ['USD', 'JPY'],
  ],
  rates1 = [2.0, 3.0],
  pairs2 = [
    ['JPY', 'USD'],
    ['USD', 'CHF'],
    ['CHF', 'EUR'],
  ],
  rates2 = [4.0, 5.0, 6.0];
var expected = 720;
var result = maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2);
console.log(result, result === expected);

var initialCurrency = 'NGN',
  pairs1 = [['NGN', 'EUR']],
  rates1 = [9.0],
  pairs2 = [['NGN', 'EUR']],
  rates2 = [6.0];
var expected = 1.5;
var result = maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2);
console.log(result, result === expected);

var initialCurrency = 'USD',
  pairs1 = [['USD', 'EUR']],
  rates1 = [1.0],
  pairs2 = [['EUR', 'JPY']],
  rates2 = [10.0];
var expected = 1.0;
var result = maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2);
console.log(result, result === expected);
