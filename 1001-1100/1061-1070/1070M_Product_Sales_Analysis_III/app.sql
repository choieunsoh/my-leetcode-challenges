# 1070. Product Sales Analysis III
# https://leetcode.com/problems/product-sales-analysis-iii/description/

WITH Sales (sale_id, product_id, year, quantity, price) AS (
  VALUES
    (1, 100, 2008, 10, 5000),
    (2, 100, 2009, 12, 5000),
    (7, 200, 2011, 15, 9000)
),
RankSales AS (
  SELECT sale_id, product_id, year, quantity, price
  ,RANK() OVER (PARTITION BY product_id ORDER BY year) AS sales_rank
  FROM Sales
)
SELECT product_id, year AS first_year, quantity, price
FROM RankSales
WHERE sales_rank = 1;
