# 1174. Immediate Food Delivery II
# https://leetcode.com/problems/immediate-food-delivery-ii/description/

WITH Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) AS (
  VALUES
    (1, 1, '2019-08-01', '2019-08-02'),
    (2, 2, '2019-08-02', '2019-08-02'),
    (3, 1, '2019-08-11', '2019-08-12'),
    (4, 3, '2019-08-24', '2019-08-24'),
    (5, 3, '2019-08-21', '2019-08-22'),
    (6, 2, '2019-08-11', '2019-08-13'),
    (7, 4, '2019-08-09', '2019-08-09')
),
ImmediateOrders AS (
  SELECT customer_id
  ,CASE WHEN order_date = customer_pref_delivery_date THEN 1.0 ELSE 0.0 END AS immediate_delivery
  ,ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS order_seq
  FROM Delivery
)
SELECT ROUND(100.0 * AVG(immediate_delivery), 2) AS immediate_percentage
FROM ImmediateOrders
WHERE order_seq = 1;
