# 579. Find Cumulative Salary of an Employee
# https://leetcode.com/problems/find-cumulative-salary-of-an-employee/submissions/1860532533/
WITH Employee (id, month, salary) AS (
  VALUES
    (1, 1, 20),
    (2, 1, 20),
    (1, 2, 30),
    (2, 2, 30),
    (3, 2, 40),
    (1, 3, 40),
    (3, 3, 60),
    (1, 4, 60),
    (3, 4, 70),
    (1, 7, 90),
    (1, 8, 90)
),
CumulativeSalary AS (
  SELECT E1.id
  ,E1.month
  ,E1.salary
    + COALESCE(E2.salary, 0)
    + COALESCE(E3.salary, 0)
  AS salary
  ,LEAD(E1.month) OVER (PARTITION BY E1.id ORDER BY E1.month) AS next_month
  FROM Employee E1
  LEFT JOIN Employee E2
  ON E1.id = E2.id
  AND E1.month - 1 = E2.month
  LEFT JOIN Employee E3
  ON E1.id = E3.id
  AND E1.month - 2 = E3.month
)
SELECT id, month, salary
FROM CumulativeSalary
WHERE next_month IS NOT NULL
ORDER BY id, month DESC;
