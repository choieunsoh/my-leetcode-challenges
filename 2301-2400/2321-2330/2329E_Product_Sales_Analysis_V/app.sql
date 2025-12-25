# 2329. Product Sales Analysis V
# https://leetcode.com/problems/product-sales-analysis-v/description/

WITH Sales (sale_id, product_id, user_id, quantity) AS (
  VALUES
    (1, 1, 101, 10),
    (2, 2, 101, 1),
    (3, 3, 102, 3),
    (4, 3, 102, 2),
    (5, 2, 103, 3)
),
Product (product_id, price) AS (
  VALUES
    (1, 10),
    (2, 25),
    (3, 15)
)
SELECT S.user_id
,SUM(S.quantity * P.price) AS spending
FROM Sales S
INNER JOIN Product P
ON S.product_id = P.product_id
GROUP BY S.user_id
ORDER BY spending DESC;
