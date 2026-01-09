# 1205. Monthly Transactions II
# https://leetcode.com/problems/monthly-transactions-ii/description/

WITH Transactions (id, country, state, amount, trans_date) AS (
  VALUES
    (101, 'US', 'approved', 1000, '2019-05-18'),
    (102, 'US', 'declined', 2000, '2019-05-19'),
    (103, 'US', 'approved', 3000, '2019-06-10'),
    (104, 'US', 'declined', 4000, '2019-06-13'),
    (105, 'US', 'approved', 5000, '2019-06-15')
),
Chargebacks (trans_id, trans_date) AS (
  VALUES
    (102, '2019-05-29'),
    (101, '2019-06-30'),
    (105, '2019-09-18')
),
Trans AS (
  SELECT SUBSTRING(trans_date, 1, 7) AS month, country
  ,COUNT(id) AS approved_count
  ,SUM(amount) AS approved_amount
  ,0 AS chargeback_count
  ,0 AS chargeback_amount
  FROM Transactions
  WHERE state = 'approved'
  GROUP BY month, country
  UNION ALL
  SELECT SUBSTRING(C.trans_date, 1, 7) AS month, T.country
  ,0 AS approved_count
  ,0 AS approved_amount
  ,COUNT(T.id) AS chargeback_count
  ,SUM(T.amount) AS chargeback_amount
  FROM Transactions T
  INNER JOIN Chargebacks C
  ON T.id = C.trans_id
  GROUP BY month, country
)
SELECT month, country
,SUM(approved_count) AS approved_count
,SUM(approved_amount) AS approved_amount
,SUM(chargeback_count) AS chargeback_count
,SUM(chargeback_amount) AS chargeback_amount
FROM Trans
GROUP BY month, country;
