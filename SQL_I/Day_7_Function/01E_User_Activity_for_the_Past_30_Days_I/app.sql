-- https://leetcode.com/problems/user-activity-for-the-past-30-days-i/
-- 1141. User Activity for the Past 30 Days I
SELECT activity_date AS day
,COUNT(DISTINCT user_id) AS active_users 
FROM Activity
WHERE activity_date BETWEEN DATEADD(day,-29,'2019-07-27') AND '2019-07-27'
GROUP BY activity_date