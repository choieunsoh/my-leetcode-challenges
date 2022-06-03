-- https://leetcode.com/problems/recyclable-and-low-fat-products/
;WITH Products AS (
  SELECT 0 AS product_id,'Y' AS low_fats,'N' AS recyclable 
  UNION SELECT 1,'Y','Y'
  UNION SELECT 2,'N','Y'
  UNION SELECT 3,'Y','Y'
  UNION SELECT 4,'N','N'
)
SELECT product_id
FROM Products
WHERE low_fats = 'Y'
AND recyclable = 'Y'