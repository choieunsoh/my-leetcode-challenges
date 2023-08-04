-- 178. Rank Scores
-- https://leetcode.com/problems/rank-scores/
/* Write your T-SQL query statement below */
SELECT score
,DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores