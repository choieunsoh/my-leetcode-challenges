-- https://leetcode.com/problems/customers-who-never-order/
-- 183. Customers Who Never Order
SELECT C.name AS Customers
FROM Customers C
LEFT JOIN Orders O
ON C.id = O.customerId
WHERE O.id IS NULL
