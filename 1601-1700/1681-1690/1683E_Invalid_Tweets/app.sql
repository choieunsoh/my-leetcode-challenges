-- 1683. Invalid Tweets
-- https://leetcode.com/problems/invalid-tweets/

/* Write your T-SQL query statement below */
SELECT tweet_id
FROM Tweets
WHERE LEN(content) > 15;