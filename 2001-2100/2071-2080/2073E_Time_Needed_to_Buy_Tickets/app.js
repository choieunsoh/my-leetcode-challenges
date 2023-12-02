// 2073. Time Needed to Buy Tickets
// https://leetcode.com/problems/time-needed-to-buy-tickets/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  const n = tickets.length;
  let result = 0;
  let i = 0;
  while (tickets[k]) {
    if (tickets[i]) {
      tickets[i]--;
      result++;
    }
    i = (i + 1) % n;
  }
  return result;
};

var tickets = [2, 3, 2],
  k = 2;
var expected = 6;
var result = timeRequiredToBuy(tickets, k);
console.log(result, result === expected);

var tickets = [5, 1, 1, 1],
  k = 0;
var expected = 8;
var result = timeRequiredToBuy(tickets, k);
console.log(result, result === expected);
