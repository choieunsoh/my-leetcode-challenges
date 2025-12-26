# 1076. Project Employees II
# https://leetcode.com/problems/project-employees-ii/description/

WITH Project (project_id, employee_id) AS (
  VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 4)
),
Employee (employee_id, name, experience_years) AS (
  VALUES
    (1, 'Khaled', 3),
    (2, 'Ali', 2),
    (3, 'John', 1),
    (4, 'Doe', 2)
),
MostEmployees AS (
  SELECT project_id
  ,COUNT(employee_id) AS total_employees
  FROM Project
  GROUP BY project_id
)
SELECT project_id
FROM MostEmployees
WHERE total_employees = (
  SELECT MAX(total_employees)
  FROM MostEmployees
);
