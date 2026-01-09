# 1193. Monthly Transactions I
# https://leetcode.com/problems/monthly-transactions-i/description/

WITH Transactions (id, country, state, amount, trans_date) AS (
  VALUES
    (121, 'US', 'approved', 1000, '2018-12-18'),
    (122, 'US', 'declined', 2000, '2018-12-19'),
    (123, 'US', 'approved', 2000, '2019-01-01'),
    (124, 'DE', 'approved', 2000, '2019-01-07')
)
SELECT SUBSTR(trans_date, 1, 7) AS month
/*,DATE_FORMAT(trans_date, '%Y-%m') AS month*/
,country
,COUNT(*) AS trans_count
,COUNT(CASE WHEN state = 'approved' THEN 1 ELSE NULL END) AS approved_count
,SUM(amount) AS trans_total_amount
,SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY month, country;
