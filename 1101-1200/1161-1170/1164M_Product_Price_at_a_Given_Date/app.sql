# 1164. Product Price at a Given Date
# https://leetcode.com/problems/product-price-at-a-given-date/description/

WITH Products (product_id, new_price, change_date) AS (
  VALUES
    (1, 20, '2019-08-14'),
    (2, 50, '2019-08-14'),
    (1, 30, '2019-08-15'),
    (1, 35, '2019-08-16'),
    (2, 65, '2019-08-17'),
    (3, 20, '2019-08-18')
),
LatestPrices AS (
  SELECT product_id
  ,change_date
  ,FIRST_VALUE(new_price) OVER (PARTITION BY product_id ORDER BY change_date DESC) AS price
  FROM Products
  WHERE change_date <= '2019-08-16'
)
SELECT DISTINCT P.product_id, COALESCE(L.price, 10) AS price
FROM Products P
LEFT JOIN LatestPrices L
ON P.product_id = L.product_id
ORDER BY P.product_id;
