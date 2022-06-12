-- https://leetcode.com/problems/capital-gainloss/
-- 1393. Capital Gain/Loss
WITH temp AS (
  SELECT stock_name
  ,operation
  ,operation_day
  ,LAG(price,1) OVER (PARTITION BY stock_name ORDER BY operation_day) AS buy_price
  ,price AS sell_price
  FROM Stocks
)
SELECT stock_name
,SUM(sell_price - buy_price) AS capital_gain_loss
FROM temp
WHERE operation = 'Sell'
GROUP BY stock_name
