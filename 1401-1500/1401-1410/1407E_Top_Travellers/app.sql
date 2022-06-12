-- https://leetcode.com/problems/top-travellers/
-- 1407. Top Travellers
SELECT U.name
,ISNULL(SUM(R.distance),0) AS travelled_distance
FROM Users U
LEFT JOIN Rides R
ON U.id = R.user_id
GROUP BY U.id,U.name
ORDER BY 2 DESC,1
