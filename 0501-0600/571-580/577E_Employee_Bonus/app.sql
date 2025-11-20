# 577. Employee Bonus
# https://leetcode.com/problems/employee-bonus/description/

WITH Employee (empId, name, supervisor, salary) AS (
  SELECT 3,'Brad',null,4000
  UNION ALL SELECT 1, 'John', 3, 1000
  UNION ALL SELECT 2, 'Dan', 3, 2000
  UNION ALL SELECT 4, 'Thomas', 3, 4000
),Bonus (empId, bonus) AS (
  SELECT 2,500
  UNION ALL SELECT 4,2000
)
SELECT e.name, b.bonus
FROM Employee e
LEFT JOIN Bonus b
ON e.empId = b.empId
WHERE b.bonus IS NULL
OR b.bonus < 1000;
