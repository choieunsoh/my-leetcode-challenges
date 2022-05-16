var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profit = Math.max(profit, prices[i] - buy);
  }

  return profit;
};
var prices = [7, 1, 5, 3, 6, 4];
//prices = [2, 4, 1];
console.log(maxProfit(prices));
