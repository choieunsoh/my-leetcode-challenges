-- 570. Managers with at Least 5 Direct Reports
-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports
/* Write your T-SQL query statement below */
;WITH temp AS (
  SELECT managerId
  FROM Employee
  GROUP BY managerId
  HAVING COUNT(*) >= 5
)
SELECT E.name
FROM Employee E
INNER JOIN temp T
ON E.id = T.managerId
