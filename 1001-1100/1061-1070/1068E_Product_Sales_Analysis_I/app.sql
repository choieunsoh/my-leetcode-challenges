# 1068. Product Sales Analysis I
# https://leetcode.com/problems/product-sales-analysis-i/description/

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
SELECT P.product_name
,S.year
,S.price
FROM Sales S
INNER JOIN Product P
ON S.product_id = P.product_id
ORDER BY S.year, P.product_name;
