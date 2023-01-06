// 1833. Maximum Ice Cream Bars
// https://leetcode.com/problems/maximum-ice-cream-bars/
class Main {
  public static void main(String[] args) {
    Solution solution = new Solution();
    int[] costs = { 4, 7, 6, 4, 4, 2, 2, 4, 8, 8 };
    int coins = 41;
    int expected = 9;
    int result = solution.maxIceCream(costs, coins);
    System.out.printf("%d %s\n", result, result == expected);
  }
}
class Solution {
  public int maxIceCream(int[] costs, int coins) {
    int iceCreams = 0;
    int maxCost = 0;
    for (int cost : costs) {
      if (cost > maxCost)
        maxCost = cost;
    }

    final int[] coinCounting = new int[maxCost + 1];
    for (int cost : costs) {
      coinCounting[cost]++;
    }
    for (int cost = 1; cost <= maxCost; cost++) {
      if (coinCounting[cost] == 0)
        continue;
      if (cost > coins)
        break;

      int totalCoins = Math.min(coinCounting[cost], coins / cost);
      coins -= totalCoins * cost;
      iceCreams += totalCoins;
    }
    return iceCreams;
  }
}