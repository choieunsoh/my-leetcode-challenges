# 615. Average Salary: Departments VS Company
# https://leetcode.com/problems/average-salary-departments-vs-company/description/

WITH Salary (id, employee_id, amount, pay_date) AS (
  VALUES
    (1, 1, 9000, '2017/03/31'),
    (2, 2, 6000, '2017/03/31'),
    (3, 3, 10000, '2017/03/31'),
    (4, 1, 7000, '2017/02/28'),
    (5, 2, 6000, '2017/02/28'),
    (6, 3, 8000, '2017/02/28')
),
Employee (employee_id, department_id) AS (
  VALUES
    (1, 1),
    (2, 2),
    (3, 2)
),
SalaryWithDept AS (
  SELECT S.employee_id
  ,E.department_id
  ,S.amount
  ,DATE_FORMAT(S.pay_date, '%Y-%m') AS pay_month
  FROM Salary S
  INNER JOIN Employee E
  ON S.employee_id = E.employee_id
),
AvgSalary AS (
  SELECT pay_month
  ,department_id
  ,AVG(amount) OVER (PARTITION BY pay_month) AS avg_company
  ,AVG(amount) OVER (PARTITION BY pay_month, department_id) AS avg_department
  FROM SalaryWithDept
)
SELECT pay_month, department_id
,CASE
	WHEN avg_company = avg_department THEN 'same'
  WHEN avg_company > avg_department THEN 'lower'
  ELSE 'higher'
END AS comparison
FROM AvgSalary
GROUP BY pay_month, department_id
ORDER BY pay_month, department_id;
