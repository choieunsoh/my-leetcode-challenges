-- https://leetcode.com/problems/bank-account-summary-ii/
-- 1587. Bank Account Summary II
SELECT U.name
,SUM(T.amount) AS balance
FROM Users U
INNER JOIN Transactions T
ON U.account = T.account
GROUP BY U.account,U.name
HAVING SUM(T.amount) > 10000
