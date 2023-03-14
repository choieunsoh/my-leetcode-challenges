// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveBills = 0;
  let tenBills = 0;
  for (const bill of bills) {
    if (bill === 5) {
      fiveBills++;
    } else if (bill === 10) {
      tenBills++;
      fiveBills--;
    } else {
      if (tenBills > 0) {
        tenBills--;
        fiveBills--;
      } else {
        fiveBills -= 3;
      }
    }
    if (fiveBills < 0 || tenBills < 0) return false;
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
