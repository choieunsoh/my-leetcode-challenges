# 1069. Product Sales Analysis II
# https://leetcode.com/problems/product-sales-analysis-ii/description/

WITH Sales (sale_id, product_id, year, quantity, price) AS (
  VALUES
    (1, 100, 2008, 10, 5000),
    (2, 100, 2009, 12, 5000),
    (7, 200, 2011, 15, 9000)
),
Product (product_id, product_name) AS (
  VALUES
    (100, 'Nokia'),
    (200, 'Apple'),
    (300, 'Samsung')
)
SELECT P.product_id
,COALESCE(SUM(S.quantity), 0) AS total_quantity
FROM Product P
INNER JOIN Sales S
ON P.product_id = S.product_id
GROUP BY P.product_id
ORDER BY P.product_id;
