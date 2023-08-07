-- 1907. Count Salary Categories
-- https://leetcode.com/problems/count-salary-categories
/* Write your T-SQL query statement below */
;WITH temp AS (
  SELECT 'Low Salary' AS category
  UNION ALL SELECT 'Average Salary'
  UNION ALL SELECT 'High Salary'
),temp1 AS (
  SELECT CASE WHEN income < 20000 THEN 'Low Salary'
    WHEN income > 50000 THEN 'High Salary'
    ELSE 'Average Salary'
  END AS category
  FROM Accounts
),temp2 AS (
  SELECT category
  ,COUNT(*) AS accounts_count
  FROM temp1
  GROUP BY category
)
SELECT C.category
,ISNULL(A.accounts_count,0) AS accounts_count
FROM temp C
LEFT JOIN temp2 A
ON C.category = A.category
