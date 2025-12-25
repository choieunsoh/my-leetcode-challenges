# 2324. Product Sales Analysis IV
# https://leetcode.com/problems/product-sales-analysis-iv/description/

WITH Sales (sale_id, product_id, user_id, quantity) AS (
  VALUES
    (1, 1, 101, 10),
    (2, 3, 101, 7),
    (3, 1, 102, 9),
    (4, 2, 102, 6),
    (5, 3, 102, 10),
    (6, 1, 102, 6)
),
Product (product_id, price) AS (
  VALUES
    (1, 10),
    (2, 25),
    (3, 15)
),
TotalSales AS (
  SELECT S.user_id
  ,S.product_id
  ,SUM(S.quantity * P.price) AS total_amount
  FROM Sales S
  INNER JOIN Product P
  ON S.product_id = P.product_id
  GROUP BY S.user_id, S.product_id
),
SalesRank AS (
  SELECT user_id, product_id
  ,RANK() OVER (PARTITION BY user_id ORDER BY total_amount DESC) AS rk
  FROM TotalSales
)
SELECT user_id, product_id
FROM SalesRank
WHERE rk = 1;
