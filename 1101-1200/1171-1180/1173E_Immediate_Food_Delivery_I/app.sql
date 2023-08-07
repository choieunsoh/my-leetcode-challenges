-- 1173. Immediate Food Delivery I
-- https://leetcode.com/problems/immediate-food-delivery-i
/* Write your T-SQL query statement below */
SELECT ROUND(100.0*AVG(CASE WHEN order_date = customer_pref_delivery_date
  THEN 1.0 ELSE 0 END),2) AS immediate_percentage
FROM Delivery
