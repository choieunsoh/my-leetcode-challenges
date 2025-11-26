# 569. Median Employee Salary
# https://leetcode.com/problems/median-employee-salary/description/

WITH Employee (id, company, salary) AS (
  VALUES
    (1, 'A', 2341),
    (2, 'A', 341),
    (3, 'A', 15),
    (4, 'A', 15314),
    (5, 'A', 451),
    (6, 'A', 513),
    (7, 'B', 15),
    (8, 'B', 13),
    (9, 'B', 1154),
    (10, 'B', 1345),
    (11, 'B', 1221),
    (12, 'B', 234),
    (13, 'C', 2345),
    (14, 'C', 2645),
    (15, 'C', 2645),
    (16, 'C', 2652),
    (17, 'C', 65)
),
RankedSalaries AS (
  SELECT id
  ,company
  ,salary
  ,COUNT(id) OVER (PARTITION BY company) AS employee_count
  ,ROW_NUMBER() OVER (PARTITION BY company ORDER BY salary) AS salary_rank
  FROM Employee
)
SELECT id
,company
,salary
FROM RankedSalaries
WHERE salary_rank BETWEEN
  FLOOR((employee_count + 1) / 2.0) AND
  CEILING((employee_count + 1) / 2.0)
ORDER BY company, salary_rank;
