-- https://leetcode.com/problems/second-highest-salary/
-- 176. Second Highest Salary
SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (
  SELECT MAX(salary)
  FROM Employee
)