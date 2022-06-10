-- https://leetcode.com/problems/group-sold-products-by-the-date/
-- 1484. Group Sold Products By The Date
WITH temp AS (
  SELECT DISTINCT * FROM Activities
)
SELECT sell_date
,COUNT(DISTINCT product) AS num_sold
,STRING_AGG(product,',') WITHIN GROUP (ORDER BY product) AS products
FROM temp
GROUP BY sell_date
ORDER BY sell_date