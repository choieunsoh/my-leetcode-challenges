# 181. Employees Earning More Than Their Managers
# https://leetcode.com/problems/employees-earning-more-than-their-managers/description/

# Write your MySQL query statement below
;WITH Employee AS (
  SELECT 1 AS id, 'Joe' AS name, 70000 AS salary, 3 AS managerId
  UNION ALL SELECT 2, 'Henry', 80000, 4
  UNION ALL SELECT 3, 'Sam', 60000, NULL
  UNION ALL SELECT 4, 'Max', 90000, NULL
)
SELECT e.name AS Employee
FROM Employee e
INNER JOIN Employee m
ON e.managerId = m.id
AND e.salary > m.salary
