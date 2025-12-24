# 1045. Customers Who Bought All Products
# https://leetcode.com/problems/customers-who-bought-all-products/description/

WITH Customer (customer_id, product_key) AS (
  VALUES
    (1, 5),
    (2, 6),
    (3, 5),
    (3, 6),
    (1, 6)
),
Product (product_key) AS (
  VALUES
    (5),
    (6)
),ProductCount AS (
  SELECT COUNT(*) AS total_products
  FROM Product
)
SELECT C.customer_id
FROM Customer C, ProductCount P
GROUP BY C.customer_id, P.total_products
HAVING COUNT(DISTINCT C.product_key) = P.total_products
ORDER BY C.customer_id;
