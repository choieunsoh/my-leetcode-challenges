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
RankExp AS (
  SELECT P.project_id
  ,P.employee_id
  ,RANK() OVER (PARTITION BY P.project_id ORDER BY E.experience_years DESC) AS rk
  FROM Project P
  INNER JOIN Employee E
  ON P.employee_id = E.employee_id
)
SELECT project_id, employee_id
FROM RankExp
WHERE rk = 1;
