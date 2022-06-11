-- https://leetcode.com/problems/employees-with-missing-information/
-- 1965. Employees With Missing Information
SELECT ISNULL(E.employee_id,S.employee_id) AS employee_id
FROM Employees AS E
FULL OUTER JOIN Salaries AS S
ON E.employee_id = S.employee_id
WHERE E.employee_id IS NULL
OR S.salary IS NULL
ORDER BY 1