-- https://leetcode.com/problems/rearrange-products-table/
-- 1795. Rearrange Products Table
SELECT product_id,store,price
FROM (
  SELECT product_id,store1,store2,store3
  FROM Products
) P
UNPIVOT (
  price FOR store IN (store1,store2,store3)
) A
ORDER BY 1,2