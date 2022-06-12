-- https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/
-- 586. Customer Placing the Largest Number of Orders
SELECT TOP 1 customer_number
FROM Orders
GROUP BY customer_number
ORDER BY COUNT(order_number) DESC