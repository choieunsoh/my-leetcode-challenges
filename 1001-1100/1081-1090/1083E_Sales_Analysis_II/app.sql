# 1083. Sales Analysis II
# https://leetcode.com/problems/sales-analysis-ii/description/

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
    (2, 1, 3, '2019-06-02', 1, 800),
    (3, 3, 3, '2019-05-13', 2, 2800)
),
ProductSales AS (
  SELECT DISTINCT S.buyer_id, P.product_name
  FROM Sales S
  INNER JOIN Product P
  ON S.product_id = P.product_id
  WHERE P.product_name IN ('S8', 'iPhone')
)
SELECT buyer_id
FROM ProductSales
WHERE product_name = 'S8'
AND buyer_id NOT IN (
  SELECT buyer_id
  FROM ProductSales
  WHERE product_name = 'iPhone'
);
