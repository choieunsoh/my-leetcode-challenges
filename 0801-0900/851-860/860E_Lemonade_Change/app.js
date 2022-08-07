// https://leetcode.com/problems/lemonade-change/
// 860. Lemonade Change
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      ten++;
      five--;
    } else {
      if (ten > 0) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
    }
    if (five < 0) return false;
  }
  return true;
};

var bills = [5, 5, 5, 10, 20];
var expected = true;
var actual = lemonadeChange(bills);
console.log(actual, expected === actual);

var bills = [5, 5, 10, 10, 20];
var expected = false;
var actual = lemonadeChange(bills);
console.log(actual, expected === actual);
