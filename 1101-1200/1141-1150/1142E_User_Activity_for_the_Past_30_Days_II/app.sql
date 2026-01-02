# 1142. User Activity for the Past 30 Days II
# https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/description/

WITH Activity (user_id, session_id, activity_date, activity_type) AS (
  VALUES
    (1, 1, '2019-07-20', 'open_session'),
    (1, 1, '2019-07-20', 'scroll_down'),
    (1, 1, '2019-07-20', 'end_session'),
    (2, 4, '2019-07-20', 'open_session'),
    (2, 4, '2019-07-21', 'send_message'),
    (2, 4, '2019-07-21', 'end_session'),
    (3, 2, '2019-07-21', 'open_session'),
    (3, 2, '2019-07-21', 'send_message'),
    (3, 2, '2019-07-21', 'end_session'),
    (3, 5, '2019-07-21', 'open_session'),
    (3, 5, '2019-07-21', 'scroll_down'),
    (3, 5, '2019-07-21', 'end_session'),
    (4, 3, '2019-06-25', 'open_session'),
    (4, 3, '2019-06-25', 'end_session')
),
Last30Days AS (
  SELECT user_id
  ,COUNT(DISTINCT session_id) AS session_count
  FROM Activity
  WHERE activity_date BETWEEN '2019-06-28' AND '2019-07-27'
  GROUP BY user_id
)
SELECT ROUND(COALESCE(AVG(session_count), 0), 2) AS average_sessions_per_user
FROM Last30Days;
