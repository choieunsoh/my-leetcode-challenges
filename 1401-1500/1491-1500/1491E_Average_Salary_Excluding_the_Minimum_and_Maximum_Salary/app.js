// 1491. Average Salary Excluding the Minimum and Maximum Salary
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let min = (max = sum = salary[0]);
  for (let i = 1; i < salary.length; i++) {
    min = Math.min(min, salary[i]);
    max = Math.max(max, salary[i]);
    sum += salary[i];
  }
  return (sum - min - max) / (salary.length - 2);
};

var salary = [4000, 3000, 1000, 2000];
var expected = 2500.0;
var result = average(salary);
console.log(result, result === expected);

var salary = [1000, 2000, 3000];
var expected = 2000.0;
var result = average(salary);
console.log(result, result === expected);
