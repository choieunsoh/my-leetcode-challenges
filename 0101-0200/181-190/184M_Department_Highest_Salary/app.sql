-- 184. Department Highest Salary
-- https://leetcode.com/problems/department-highest-salary/
/* Write your T-SQL query statement below */
;WITH temp AS (
  SELECT D.name AS Department
  ,E.name AS Employee
  ,E.salary AS Salary
  ,RANK() OVER (PARTITION BY D.id ORDER BY E.salary DESC) AS rank_id
  FROM Employee E
  INNER JOIN Department D
  ON E.departmentId = D.id
)
SELECT Department,Employee,Salary
FROM temp
WHERE rank_id = 1
