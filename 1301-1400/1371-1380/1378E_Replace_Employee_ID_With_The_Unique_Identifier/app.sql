-- 1378. Replace Employee ID With The Unique Identifier
-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier
/* Write your T-SQL query statement below */
SELECT B.unique_id,A.name
FROM Employees A
LEFT JOIN EmployeeUNI B
ON A.id = B.id