-- https://leetcode.com/problems/find-followers-count/
-- 1729. Find Followers Count
SELECT user_id
,COUNT(follower_id) AS followers_count
FROM Followers
GROUP BY user_id