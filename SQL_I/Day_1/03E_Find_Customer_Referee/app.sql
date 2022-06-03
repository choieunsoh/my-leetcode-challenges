-- https://leetcode.com/problems/find-customer-referee/
-- 584. Find Customer Referee
/* Write your T-SQL query statement below */
SELECT name
FROM Customer
WHERE referee_id != 2
OR referee_id IS NULL