// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
class Solution {
  public int maxProfit(int[] prices) {
    int profit = 0;
    int buy = prices[0];
    for (int i = 1; i < prices.length; i++) {
      buy = Math.min(buy, prices[i]);
      profit = Math.max(profit, prices[i] - buy);
    }
    return profit;
  }
}