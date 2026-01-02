# 1132. Reported Posts II
# https://leetcode.com/problems/reported-posts-ii/description/

WITH Actions (user_id, post_id, action_date, action, extra) AS (
  VALUES
    (1, 1, '2019-07-01', 'view', NULL),
    (1, 1, '2019-07-01', 'like', NULL),
    (1, 1, '2019-07-01', 'share', NULL),
    (2, 2, '2019-07-04', 'view', NULL),
    (2, 2, '2019-07-04', 'report', 'spam'),
    (3, 4, '2019-07-04', 'view', NULL),
    (3, 4, '2019-07-04', 'report', 'spam'),
    (4, 3, '2019-07-02', 'view', NULL),
    (4, 3, '2019-07-02', 'report', 'spam'),
    (5, 2, '2019-07-03', 'view', NULL),
    (5, 2, '2019-07-03', 'report', 'racism'),
    (5, 5, '2019-07-03', 'view', NULL),
    (5, 5, '2019-07-03', 'report', 'racism')
),
Removals (post_id, remove_date) AS (
  VALUES
    (2, '2019-07-20'),
    (3, '2019-07-18')
),
RemovedRate AS (
  SELECT A.action_date,
  100 *
    COUNT(DISTINCT CASE WHEN A.post_id = R.post_id THEN R.post_id END) /
    COUNT(DISTINCT A.post_id) AS removal_rate
  FROM Actions A
  LEFT JOIN Removals R
  ON A.post_id = R.post_id
  WHERE A.action = 'report'
  AND A.extra = 'spam'
  GROUP BY A.action_date
)
SELECT ROUND(AVG(removal_rate), 2) AS average_daily_percent
FROM RemovedRate;
