-- 1907. Count Salary Categories
-- https://leetcode.com/problems/count-salary-categories
-- Write your MySQL query statement below
SELECT 'Low Salary' AS Category
,SUM(income < 20000) AS accounts_count
FROM Accounts
UNION ALL
SELECT 'Average Salary' AS Category
,SUM(income >= 20000 AND income <= 50000) AS accounts_count
FROM Accounts
UNION ALL
SELECT 'High Salary' AS category
,SUM(income > 50000) AS accounts_count
FROM Accounts