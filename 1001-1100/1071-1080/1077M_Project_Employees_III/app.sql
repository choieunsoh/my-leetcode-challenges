# 1077. Project Employees III
# https://leetcode.com/problems/project-employees-iii/description/

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
    (3, 'John', 3),
    (4, 'Doe', 2)
),
MostExp AS (
  SELECT P.project_id
  ,MAX(E.experience_years) AS most_experience_years
  FROM Project P
  INNER JOIN Employee E
  ON P.employee_id = E.employee_id
  GROUP BY P.project_id
)
SELECT P.project_id, P.employee_id
FROM Project P
INNER JOIN Employee E
ON P.employee_id = E.employee_id
INNER JOIN MostExp M
ON P.project_id = M.project_id
AND E.experience_years = M.most_experience_years;
