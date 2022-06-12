-- https://leetcode.com/problems/market-analysis-i/
-- 1158. Market Analysis I
SELECT U.user_id AS buyer_id
,U.join_date
,ISNULL(COUNT(O.order_id),0) AS orders_in_2019
FROM Users U
LEFT JOIN Orders O
ON O.buyer_id = U.user_id
AND YEAR(O.order_date) = 2019
GROUP BY U.user_id,U.join_date
ORDER BY 1
