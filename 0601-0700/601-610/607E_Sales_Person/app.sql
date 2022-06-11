-- https://leetcode.com/problems/sales-person/
-- 607. Sales Person
SELECT name
FROM SalesPerson 
WHERE sales_id NOT IN (
  SELECT O.sales_id
  FROM Orders O
  INNER JOIN Company C
  ON O.com_id = C.com_id
  WHERE C.name = 'RED'
)