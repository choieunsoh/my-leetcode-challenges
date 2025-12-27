# 1082. Sales Analysis I
# https://leetcode.com/problems/sales-analysis-i/description/

WITH Product (product_id, product_name, unit_price) AS (
  VALUES
    (1, 'S8', 1000),
    (2, 'G4', 800),
    (3, 'iPhone', 1400)
),
Sales (seller_id, product_id, buyer_id, sale_date, quantity, price) AS (
  VALUES
    (1, 1, 1, '2019-01-21', 2, 2000),
    (1, 2, 2, '2019-02-17', 1, 800),
    (2, 2, 3, '2019-06-02', 1, 800),
    (3, 3, 4, '2019-05-13', 2, 2800)
),
TotalSales AS (
  SELECT seller_id
  ,SUM(price) AS total_amount
  FROM Sales
  GROUP BY seller_id
)
SELECT seller_id
FROM TotalSales
WHERE total_amount = (
  SELECT MAX(total_amount)
  FROM TotalSales
);
