# 1107. New Users Daily Count
# https://leetcode.com/problems/new-users-daily-count/description/

WITH Traffic (user_id, activity, activity_date) AS (
  VALUES
    (1, 'login', '2019-05-01'),
    (1, 'homepage', '2019-05-01'),
    (1, 'logout', '2019-05-01'),
    (2, 'login', '2019-06-21'),
    (2, 'logout', '2019-06-21'),
    (3, 'login', '2019-01-01'),
    (3, 'jobs', '2019-01-01'),
    (3, 'logout', '2019-01-01'),
    (4, 'login', '2019-06-21'),
    (4, 'groups', '2019-06-21'),
    (4, 'logout', '2019-06-21'),
    (5, 'login', '2019-03-01'),
    (5, 'logout', '2019-03-01'),
    (5, 'login', '2019-06-21'),
    (5, 'logout', '2019-06-21')
),
FirstLogin AS (
  SELECT user_id, MIN(activity_date) AS first_login_date
  FROM Traffic
  WHERE activity = 'login'
  GROUP BY user_id
)
SELECT first_login_date AS login_date
,COUNT(user_id) AS user_count
FROM FirstLogin
WHERE first_login_date BETWEEN '2019-04-01' AND '2019-06-30'
GROUP BY first_login_date
ORDER BY first_login_date;
